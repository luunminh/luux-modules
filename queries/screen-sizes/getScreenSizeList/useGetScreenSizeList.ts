import { PaginationResponseType, responseWrapper } from '@core/common/services/http';
import { isEmpty } from '@core/common/utils';
import { UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { GetScreenSizeListParams, IScreenSize } from '.';
import { ScreenSizeApi } from '..';
import { SHARED_SCREEN_SIZE_QUERY_KEY } from '../keys';

export function useGetScreenSizeList(
  options?: UseQueryOptions<PaginationResponseType<IScreenSize>, Error>,
) {
  const [params, setParams] = useState<GetScreenSizeListParams>({ skip: 0, take: 50 });
  const {
    data,
    error,
    isError,
    isFetching,
    refetch: onGetScreenSizeList,
  } = useQuery<PaginationResponseType<IScreenSize>, Error>(
    [SHARED_SCREEN_SIZE_QUERY_KEY.SCREEN_SIZES, params],
    {
      queryFn: (query) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, ...params] = query.queryKey;
        return responseWrapper<PaginationResponseType<IScreenSize>>(
          ScreenSizeApi.getScreenSizeList,
          params,
        );
      },
      notifyOnChangeProps: ['data', 'isFetching'],
      keepPreviousData: true,
      enabled: !isEmpty(params),
      ...options,
    },
  );

  const queryClient = useQueryClient();

  const handleInvalidateScreenSizeList = () =>
    queryClient.invalidateQueries([SHARED_SCREEN_SIZE_QUERY_KEY.SCREEN_SIZES]);

  const { data: screenSizeList = [], hasNext, payloadSize, totalRecords } = data || {};

  return {
    screenSizeList,
    hasNext,
    payloadSize,
    totalRecords,
    error,
    isError,
    isFetching,
    onGetScreenSizeList,
    setParams,
    handleInvalidateScreenSizeList,
  };
}
