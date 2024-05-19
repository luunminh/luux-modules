import { PaginationResponseType, responseWrapper } from '@core/common/services/http';
import { isEmpty } from '@core/common/utils';
import { CommonApi } from '@core/queries';
import { COMMON_API_KEYS } from '@core/queries/key';
import { UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { IFont, IFontParams } from './useGetFonts.types';

export function useGetFonts(options?: UseQueryOptions<PaginationResponseType<IFont>, Error>) {
  const [params, setParams] = useState<IFontParams>(null);
  const {
    data,
    error,
    isError,
    isFetching,
    refetch: onGetFonts,
  } = useQuery<PaginationResponseType<IFont>, Error>([COMMON_API_KEYS.fonts, params], {
    queryFn: (query) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...params] = query.queryKey;
      return responseWrapper<PaginationResponseType<IFont>>(CommonApi.getFonts, params);
    },
    notifyOnChangeProps: ['data', 'isFetching'],
    keepPreviousData: true,
    enabled: !isEmpty(params),
    ...options,
  });

  const queryClient = useQueryClient();

  const handleInvalidateFonts = () => queryClient.invalidateQueries([COMMON_API_KEYS.fonts]);

  const { data: fonts = [], hasNext, payloadSize, totalRecords } = data || {};

  return {
    fonts,
    hasNext,
    payloadSize,
    totalRecords,
    error,
    isError,
    isFetching,
    onGetFonts,
    setParams,
    handleInvalidateFonts,
  };
}
