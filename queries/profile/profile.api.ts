import { httpService } from '@core/common/services/http';
import { newCancelToken } from '@core/common/utils';
import { MyPermission, MyProfile } from '.';

// ====================== Profile ======================
const getMyProfile = () => httpService.get<MyProfile>('/me', {}, newCancelToken());

const getMyPermissions = () =>
  httpService.get<MyPermission[]>('/account-svc/v1/uam/permissions/me', {}, newCancelToken());

export {
  getMyPermissions,
  // ====================== Profile ======================
  getMyProfile,
};
