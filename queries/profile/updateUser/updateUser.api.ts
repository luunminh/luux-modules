import { newCancelToken } from '@core/common';
import { httpService } from '@core/common/services/http';
import { UpdateUserPayload } from '.';

const updateUser = (payload: UpdateUserPayload) => {
  const { id, ...restPayload } = payload;
  return httpService.put(`users/${id}`, { ...restPayload }, newCancelToken());
};

export { updateUser };
