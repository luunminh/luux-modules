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

export enum UserType {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

export interface MyProfile {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  status: string;
  type: UserType;
  createdAt: string;
  updatedAt: string;
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
