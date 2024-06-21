import { responseWrapper } from '@core/common/services/http';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { UpdateProfileApi, UpdateProfilePayload, UpdateProfileResponse } from '.';

export function useUpdateProfile(
  options?: UseMutationOptions<UpdateProfileResponse, Error, UpdateProfilePayload>,
) {
  const {
    mutate: onUpdateProfile,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation<UpdateProfileResponse, Error, UpdateProfilePayload>({
    mutationFn: (payload: UpdateProfilePayload) =>
      responseWrapper(UpdateProfileApi.updateProfile, [payload]),
    ...options,
  });

  return {
    onUpdateProfile,
    isLoading,
    isSuccess,
    isError,
    error,
  };
}
