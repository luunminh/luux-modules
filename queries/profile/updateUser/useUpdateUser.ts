import { responseWrapper } from '@core/common/services/http';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { UpdateUserApi, UpdateUserPayload, UpdateUserResponse } from '.';

export function useUpdateUser(
  options?: UseMutationOptions<UpdateUserResponse, Error, UpdateUserPayload>,
) {
  const {
    mutate: onUpdateUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation<UpdateUserResponse, Error, UpdateUserPayload>({
    mutationFn: (payload: UpdateUserPayload) =>
      responseWrapper(UpdateUserApi.updateUser, [payload]),
    ...options,
  });

  return {
    onUpdateUser,
    isLoading,
    isSuccess,
    isError,
    error,
  };
}
