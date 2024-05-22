import { useDebounce } from '@core/common';
import { PaginationResponseType, responseWrapper } from '@core/common/services/http';
import { GetPropertiesParams, isEmpty } from '@core/common/utils';
import { CommonApi } from '@core/queries';
import { COMMON_API_KEYS } from '@core/queries/key';
import { UseInfiniteQueryOptions, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { IAttachment } from './useGetAttachmentsLazy.types';

const defaultPageParams = {
  skip: 0,
  take: 18,
};

export function useGetAttachmentsLazy(
  options?: UseInfiniteQueryOptions<PaginationResponseType<IAttachment>, Error>,
) {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [params, setParams] = useState<GetPropertiesParams>({});
  const debounceSearch = useDebounce(inputSearch, 300);

  const {
    data,
    error,
    isError,
    isFetching,
    refetch: onGetAttachments,
    fetchNextPage,
  } = useInfiniteQuery<PaginationResponseType<IAttachment>, Error>(
    [COMMON_API_KEYS.attachment, 'options', params, debounceSearch, { type: 'lazy' }],
    (props): Promise<PaginationResponseType<IAttachment>> => {
      const { pageParam = defaultPageParams } = props;

      return responseWrapper<PaginationResponseType<IAttachment>>(CommonApi.getAttachments, [
        { ...pageParam, ...params, search: inputSearch.trim() },
      ]);
    },
    {
      keepPreviousData: true,
      getNextPageParam(lastPage, allPages) {
        if (lastPage.data?.length < 18) return undefined;
        return {
          take: 18,
          skip: allPages.length * 18,
        };
      },
      notifyOnChangeProps: ['data', 'isFetching'],
      enabled: !!params,
      ...options,
    },
  );

  const hasNext = useMemo(() => {
    if (isEmpty(data?.pages)) return null;
    return data.pages[data.pages.length - 1]?.hasNext;
  }, [data]);

  const queryClient = useQueryClient();

  const attachments = useMemo(() => {
    if (isEmpty(data?.pages)) return [];
    return data.pages.reduce((state, page, _pageIdx) => [...state, ...page.data], []);
  }, [data]) as IAttachment[];

  const handleInvalidateAttachments = () =>
    queryClient.invalidateQueries([COMMON_API_KEYS.attachment]);

  return {
    attachments,
    hasNext,
    error,
    isError,
    isFetching,
    fetchNextPage,
    setParams,
    onGetAttachments,
    handleInvalidateAttachments,
    inputSearch,
    setInputSearch,
  };
}
