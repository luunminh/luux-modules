import { useDebounce } from '@core/common';
import { PaginationResponseType, responseWrapper } from '@core/common/services/http';
import { CommonApi } from '@core/queries';
import { COMMON_API_KEYS } from '@core/queries/key';
import { UseInfiniteQueryOptions, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import { useMemo, useState } from 'react';
import { IFont, IFontOptions, IFontParams } from './useGetFonts.types';

const defaultSearch = {
  take: 10,
  skip: 0,
};

const mapFontOptions = (font: IFont[]) => {
  return font.map((font) => ({
    label: font.name,
    value: font.name,
    font: font,
  }));
};

export function useGetFontLazy(
  options?: UseInfiniteQueryOptions<PaginationResponseType<IFont>, Error>,
) {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [params, setParams] = useState<IFontParams>({});
  const debounceSearch = useDebounce(inputSearch, 300);

  const {
    data,
    error,
    isError,
    isFetching,
    refetch: onGetFonts,
    fetchNextPage,
  } = useInfiniteQuery<PaginationResponseType<IFont>, Error>(
    [COMMON_API_KEYS.fonts, 'options', params, debounceSearch, { type: 'lazy' }],
    (props): Promise<PaginationResponseType<IFont>> => {
      const { pageParam = defaultSearch } = props;

      return responseWrapper<PaginationResponseType<IFont>>(CommonApi.getFonts, [
        { ...pageParam, ...params, search: inputSearch.trim() },
      ]);
    },
    {
      keepPreviousData: true,
      getNextPageParam(lastPage, allPages) {
        if (lastPage.data?.length < 10) return undefined;
        return {
          take: 10,
          skip: allPages.length * 10,
        };
      },
      notifyOnChangeProps: ['data', 'isFetching'],
      enabled: !!params,
      ...options,
    },
  );

  const fontOptions: IFontOptions[] = useMemo(() => {
    if (isEmpty(data?.pages)) return [];
    return data.pages.reduce(
      (state, page, _pageIdx) => [...state, ...mapFontOptions(page.data)],
      [],
    );
  }, [data]);

  const hasNext = useMemo(() => {
    if (isEmpty(data?.pages)) return null;
    return data.pages[data.pages.length - 1]?.hasNext;
  }, [data]);

  const queryClient = useQueryClient();

  const handleInvalidateFonts = () => queryClient.invalidateQueries([COMMON_API_KEYS.fonts]);

  return {
    fontOptions,
    fonts: data,
    hasNext,
    error,
    isError,
    isFetching,
    fetchNextPage,
    setParams,
    onGetFonts,
    handleInvalidateFonts,
    inputSearch,
    setInputSearch,
  };
}
