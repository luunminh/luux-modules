import { isEmpty } from '@core/common';
import { MyPermissions } from './auth-store.types';

const genPermissionObject = (permissions: string, prefix: string) => {
  const parsedPermissions: string[] = permissions.match(new RegExp(`${prefix}:[CRUD]`, 'g')) || [];
  return {
    canCreate: parsedPermissions.includes(`${prefix}:C`),
    canView: parsedPermissions.includes(`${prefix}:R`),
    canUpdate: parsedPermissions.includes(`${prefix}:U`),
    canDelete: parsedPermissions.includes(`${prefix}:D`),
  };
};

export const getMyPermissionsStore = (_permissions: string = ''): MyPermissions => {
  const permissionsStore: any = {};

  if (isEmpty(_permissions)) return defaultMyPermissions;

  Object.keys(permissionTypes).forEach((key: string) => {
    const type = permissionTypes[key];
    permissionsStore[key] = genPermissionObject(_permissions, type);
  });

  return permissionsStore;
};

const permissionTypes: {
  [key: string]: string;
} = {
  user: 'USER',
  role: 'ROLE',
  permission: 'PERMISSION',
  userPermissions: 'USER_P',
  appointment: 'APPT',
  language: 'L18N',
  auditLog: 'ADT',
  notification: 'NOTIF',
  task: 'TASK',
  taskType: 'TASK_T',
  taskStatus: 'TASK_S',
  taskComment: 'TASK_C',
  taskAttachment: 'TASK_A',
  taskWorkLog: 'TASK_WL',
  taskWatcher: 'TASK_W',
  smartForm: 'SMART_FORM',
};

const dummyPermissionRange = {
  canView: false,
  canUpdate: false,
  canDelete: false,
  canCreate: false,
};

export const defaultMyPermissions: MyPermissions = {
  user: dummyPermissionRange,
  role: dummyPermissionRange,
  permission: dummyPermissionRange,
  userPermissions: dummyPermissionRange,
  appointment: dummyPermissionRange,
  language: dummyPermissionRange,
  auditLog: dummyPermissionRange,
  notification: dummyPermissionRange,
  task: dummyPermissionRange,
  taskType: dummyPermissionRange,
  taskStatus: dummyPermissionRange,
  taskComment: dummyPermissionRange,
  taskAttachment: dummyPermissionRange,
  taskWorkLog: dummyPermissionRange,
  taskWatcher: dummyPermissionRange,
  smartForm: dummyPermissionRange,
};
