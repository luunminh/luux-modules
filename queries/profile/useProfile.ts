import { ApiResponseType, responseWrapper } from '@core/common/services/http';
import { QueryFunction, UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { MyProfile, ProfileApi } from '.';
import { COMMON_API_KEYS } from '../key';

const handleGetProfile: QueryFunction<ApiResponseType<MyProfile>, any> = () =>
  responseWrapper<ApiResponseType<MyProfile>>(ProfileApi.getMyProfile);

export function useProfile(
  options?: UseQueryOptions<ApiResponseType<MyProfile>, Error, MyProfile, any>,
) {
  const {
    data,
    error,
    isError,
    isFetching,
    refetch: getMyProfile,
  } = useQuery<ApiResponseType<MyProfile>, Error, MyProfile, any>({
    queryKey: [COMMON_API_KEYS.profile],
    queryFn: handleGetProfile,
    refetchOnMount: false,
    notifyOnChangeProps: ['data', 'isFetching'],
    select: (data) => data.data,
    ...options,
  });

  const queryClient = useQueryClient();

  const handleInvalidateProfile = () => queryClient.invalidateQueries([COMMON_API_KEYS.profile]);

  return {
    profile: data,
    error,
    isError,
    loading: isFetching,
    getMyProfile,
    handleInvalidateProfile,
  };
}
