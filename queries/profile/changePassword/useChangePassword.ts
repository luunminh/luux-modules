import { responseWrapper } from '@core/common/services/http';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ChangePasswordApi, ChangePasswordPayload, ChangePasswordResponse } from '.';

export function useChangePassword(
  options?: UseMutationOptions<ChangePasswordResponse, Error, ChangePasswordPayload>,
) {
  const {
    mutate: onChangePassword,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation<ChangePasswordResponse, Error, ChangePasswordPayload>({
    mutationFn: (payload: ChangePasswordPayload) =>
      responseWrapper(ChangePasswordApi.changePassword, [payload]),
    ...options,
  });

  return {
    onChangePassword,
    isLoading,
    isSuccess,
    isError,
    error,
  };
}
