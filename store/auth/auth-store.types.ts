export type PermissionRange = {
  canView: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  canCreate: boolean;
};

export interface MyPermissions {
  user: PermissionRange;
  role: PermissionRange;
  permission: PermissionRange;
  userPermissions: PermissionRange;
  appointment: PermissionRange;
  language: PermissionRange;
  auditLog: PermissionRange;
  notification: PermissionRange;
  task: PermissionRange;
  taskType: PermissionRange;
  taskStatus: PermissionRange;
  taskComment: PermissionRange;
  taskAttachment: PermissionRange;
  taskWorkLog: PermissionRange;
  taskWatcher: PermissionRange;
  smartForm: PermissionRange;
}

export enum UserType {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
