import { responseWrapper } from '@core/common/services/http';
import { UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { IFont, TGoogleFontsResponse } from './useGetFonts.types';
import { COMMON_API_KEYS } from '@core/queries/key';
import { CommonApi } from '@core/queries';

export function useGetFonts(options?: UseQueryOptions<TGoogleFontsResponse, Error, IFont[]>) {
  const {
    data,
    error,
    isError,
    isFetching: isLoadingFonts,
    refetch: onGetFonts,
  } = useQuery<TGoogleFontsResponse, Error, IFont[]>([COMMON_API_KEYS.fonts], {
    queryFn: (query) => {
      return responseWrapper<TGoogleFontsResponse>(CommonApi.getFonts);
    },
    select: (data) => data.items,
    notifyOnChangeProps: ['data', 'refetch'],
    ...options,
  });

  const queryClient = useQueryClient();

  const handleInvalidateFonts = () => {
    return queryClient.invalidateQueries([COMMON_API_KEYS.fonts]);
  };

  const fonts: IFont[] = useMemo(() => data?.splice(0, 50), [data]);

  return {
    fonts,
    error,
    isError,
    isLoadingFonts,
    onGetFonts,
    handleInvalidateFonts,
  };
}
