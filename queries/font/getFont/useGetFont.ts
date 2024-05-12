import { isEmpty } from '@core/common';
import { responseWrapper } from '@core/common/services/http';
import { UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { IFont, TGoogleFontsResponse } from '..';
import { CommonApi } from '@core/queries';
import { COMMON_API_KEYS } from '@core/queries/key';

export function useGetFont(
  options?: UseQueryOptions<TGoogleFontsResponse, Error, IFont> & {
    fontName: string;
  }
) {
  const {
    data: font,
    error,
    isError,
    isFetching: isLoadingFont,
    refetch: onGetFont,
  } = useQuery<TGoogleFontsResponse, Error, IFont>(
    [COMMON_API_KEYS.font, { fontName: options.fontName }],
    {
      queryFn: (query) => {
        const [, ...params] = query.queryKey;
        return responseWrapper<TGoogleFontsResponse>(CommonApi.getFont, params);
      },
      select: (data) => data.items[0],
      notifyOnChangeProps: ['data', 'refetch'],
      enabled: !isEmpty(options.fontName),
      ...options,
    }
  );

  const queryClient = useQueryClient();

  const handleInvalidateFont = () => {
    return queryClient.invalidateQueries([COMMON_API_KEYS.font]);
  };

  return {
    font,
    error,
    isError,
    isLoadingFont,
    onGetFont,
    handleInvalidateFont,
  };
}
