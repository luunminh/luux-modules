import { isEmpty } from '@core/common/utils';
import { ApisauceInstance } from 'apisauce';
import { Navigator, ToastService, TokenService } from '..';

type ApiCall = (..._args: any[]) => Promise<any>;

export async function responseWrapper<T>(func: ApiCall, [...args]: any[] = []): Promise<T> {
  return new Promise(async (res, rej) => {
    try {
      const response = (await func(...args)) || {};
      if (response.ok) res(response.data);
      if (response?.originalError?.message === 'CONNECTION_TIMEOUT') {
        ToastService.error('Connection timeout. Please check your network and try again.');
      }
      rej(response.data);
    } catch (err) {
      rej(err);
    }
  });
}

export const getResponseData = (data: { data: any }) => data.data;

export interface ApiResponseType<T> {
  data: T;
  code: number;
  success: boolean;
  timestamp: string;
}

export interface PaginationResponseType<T> {
  data: T[];
  payloadSize?: number;
  hasNext?: boolean;
  skippedRecords?: number;
  totalRecords?: number;
  skip?: number;
  take?: number;
}

export interface ApiPaginationResponseType<T> {
  data: PaginationResponseType<T>;
  code?: number;
  success?: boolean;
  timestamp?: string;
  query?: Object;
}

export const configApiInstance = (api: ApisauceInstance) => {
  api.axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getACToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => Promise.reject(err),
  );

  api.axiosInstance.interceptors.response.use(undefined, async (error) => {
    if (error.response.status === 401) {
      const refreshToken = TokenService.getRFToken();

      if (refreshToken) {
        const { accessToken } = await TokenService.forceRefreshToken(refreshToken);

        if (isEmpty(accessToken)) {
          TokenService.clearTokens();
          Navigator.jumpToWebIdentity();
          // ToastService.error(error.response.data.message);

          return Promise.reject(error);
        }

        error.config.headers.Authorization = `Bearer ${accessToken}`;
        return api.axiosInstance(error.config);
      } else {
        console.log('No refresh token found');

        Navigator.jumpToWebIdentity();
      }
    }
    return Promise.reject(error);
  });
};
