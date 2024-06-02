import { GetPropertiesParams } from '@core/common';

export interface IUsers {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  status: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetUsersParams extends GetPropertiesParams {
  search?: string;
  userIds?: string[];
  emails?: string[];
}
