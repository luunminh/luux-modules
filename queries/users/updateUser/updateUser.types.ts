export type UpdateUserPayload = {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  type?: string;
  status?: string;
};

export type UpdateUserResponse = {};
