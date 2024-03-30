import configs from '@config';
import axios from 'axios';
import { AxiosClient } from './axios-client';

axios.defaults.withCredentials = true;

export const httpService = new AxiosClient({
  baseURL: configs.API_URL,
  headers: { Accept: 'application/json' },
  timeout: configs.CONNECTION_TIMEOUT,
});

export {
  authResponseWrapper,
  configApiInstance,
  getResponseData,
  responseWrapper,
} from './http.helper';

export type {
  ApiPaginationResponseType,
  ApiResponseType,
  PaginationResponseType,
} from './http.helper';
