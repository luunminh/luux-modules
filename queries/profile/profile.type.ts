export interface MyRole {
  id: string;
  name: string;
  displayName: string;
  description: string;
  userCount: number;
  createdAt: string;
  updatedAt: string;
  canBeDeleted: boolean;
  canBeUpdated: boolean;
}

export interface MyProfile {
  avatarUrl: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  middleName: string;
  fullName: string;
  username: string;
  email: string;
  userType: string;
  hasPin: boolean;
  status: string;
  profile: null;
  roles: Array<{ role: MyRole }>;
  isSuperAdmin: boolean;
}

export interface MyPermission {
  name?: string;
  id: number;
  resourceName: string;
  displayName: string;
  canCreate: boolean;
  canRead: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  permissionGroupId: number;
  createdAt: string;
  updatedAt: string;
  description?: string;
}
