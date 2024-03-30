export enum PermissionAction {
  _CREATE = 'C',
  _READ = 'R',
  _UPDATE = 'U',
  _DELETE = 'D',
}

interface Permission {
  resourceName: string;
  canCreate: boolean;
  canRead: boolean;
  canUpdate: boolean;
  canDelete: boolean;
}

export const transformPermission = (permission: Permission): string => {
  const permissionAction = Object.keys(permission).find(
    (key) => permission[key as keyof Permission] === true,
  );
  switch (permissionAction) {
    case 'canCreate':
      return `${permission.resourceName.toUpperCase()}:${PermissionAction._CREATE}`;
    case 'canRead':
      return `${permission.resourceName.toUpperCase()}:${PermissionAction._READ}`;
    case 'canUpdate':
      return `${permission.resourceName.toUpperCase()}:${PermissionAction._UPDATE}`;
    case 'canDelete':
      return `${permission.resourceName.toUpperCase()}:${PermissionAction._DELETE}`;
    default:
      return '';
  }
};
