import { newCancelToken } from '@core/common';
import { httpService } from '@core/common/services/http';
import { ChangePasswordPayload } from '.';

const changePassword = (payload: ChangePasswordPayload) => {
  return httpService.put(`/my-password`, payload, newCancelToken());
};

export { changePassword };
