import { UserType } from '../profile.type';

export type UpdateUserPayload = {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  type?: UserType;
};

export type UpdateUserResponse = {};
