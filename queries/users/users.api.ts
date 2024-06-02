import { newCancelToken, stringify } from '@core/common';
import { httpService } from '@core/common/services/http';
import { GetUsersParams } from './getUsers';

const getUsers = (params: GetUsersParams) => {
  const queryString = stringify(params);
  return httpService.get(`/users?${queryString}`, {}, newCancelToken());
};

export { getUsers };
