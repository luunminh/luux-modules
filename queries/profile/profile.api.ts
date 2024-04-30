import { newCancelToken } from '@core/common/utils';
import { MyPermission, MyProfile } from '.';
import { httpService } from '@core/common/services/http';

// ====================== Profile ======================
const getMyProfile = () =>
  httpService.get<MyProfile>('/account-svc/v1/uam/me', {}, newCancelToken());

const getMyPermissions = () =>
  httpService.get<MyPermission[]>('/account-svc/v1/uam/permissions/me', {}, newCancelToken());

export {
  getMyPermissions,
  // ====================== Profile ======================
  getMyProfile,
};
