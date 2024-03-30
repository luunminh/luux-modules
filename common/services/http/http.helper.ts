import { ApisauceInstance } from 'apisauce';
import { ToastService } from '..';

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

export async function authResponseWrapper<T>(func: ApiCall, [...args]: any[] = []): Promise<T> {
  return new Promise(async (res, rej) => {
    try {
      const response = (await func(...args)) || {};
      res(response);
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

// TODO: Implement this function
export const configApiInstance = (api: ApisauceInstance) => {
  // api.axiosInstance.interceptors.request.use((config) =>
  //   TokenService.getToken()
  //     .then((token: any) => {
  //       config.headers.Authorization = `Bearer ${token}`;
  //       return Promise.resolve(config);
  //     })
  //     .catch(() => Promise.resolve(config)),
  // );
  // api.axiosInstance.interceptors.response.use(undefined, (error) => {
  //   if (error.response.status === 401) {
  //     errorService.interceptorsErrorHandler(error.response.data);
  //     const jumpToIdentity = () => {
  //       Navigator.jumpToWebIdentity();
  //     };
  //     setTimeout(() => {
  //       Auth.signOut()
  //         .then(() => {
  //           jumpToIdentity();
  //         })
  //         .catch((error) => {
  //           ToastService.error(error.message);
  //           jumpToIdentity();
  //         });
  //     }, 800);
  //   }
  //   return Promise.reject(error);
  // });
};
