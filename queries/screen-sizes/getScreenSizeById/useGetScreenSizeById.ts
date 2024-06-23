import { ApiResponseType, getResponseData, responseWrapper } from '@core/common/services/http';
import { UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetScreenSizeByIdApi, GetScreenSizeByIdResponse } from '.';

const QUERY_KEY = {
  GET_SCREEN_SIZE_BY_ID: '/screen-sizes/:id',
};

type UseGetScreenSizeByIdParams = {
  params?: {
    id: string;
    // update type of params
    [key: string]: any;
  };
  options?: UseQueryOptions<
    ApiResponseType<GetScreenSizeByIdResponse>,
    Error,
    GetScreenSizeByIdResponse
  >;
};

export function useGetScreenSizeById({ params, options }: UseGetScreenSizeByIdParams = {}) {
  const {
    data,
    error,
    isError,
    isFetching: isLoading,
    refetch: onGetScreenSizeById,
  } = useQuery<ApiResponseType<GetScreenSizeByIdResponse>, Error, GetScreenSizeByIdResponse>({
    queryKey: [QUERY_KEY.GET_SCREEN_SIZE_BY_ID, { id: params?.id }],
    queryFn: (query) => {
      const [, ...params] = query.queryKey;
      return responseWrapper<ApiResponseType<GetScreenSizeByIdResponse>>(
        GetScreenSizeByIdApi.getScreenSizeById,
        params,
      );
    },
    notifyOnChangeProps: ['data', 'isFetching'],
    select: getResponseData,
    enabled: !!params?.id,
    ...options,
  });

  const queryClient = useQueryClient();

  const handleInvalidateGetScreenSizeById = (id: string) => {
    return queryClient.invalidateQueries([QUERY_KEY.GET_SCREEN_SIZE_BY_ID, { id }]);
  };

  return {
    data,
    isError,
    error,
    isLoading,
    onGetScreenSizeById,
    handleInvalidateGetScreenSizeById,
  };
}
