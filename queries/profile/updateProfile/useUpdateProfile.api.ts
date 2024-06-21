import { newCancelToken } from '@core/common';
import { httpService } from '@core/common/services/http';
import { UpdateProfilePayload } from '.';

const updateProfile = (payload: UpdateProfilePayload) => {
  return httpService.put(`me`, payload, newCancelToken());
};

export { updateProfile };
