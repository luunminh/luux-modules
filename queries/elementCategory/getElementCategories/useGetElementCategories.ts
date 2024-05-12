import { PaginationResponseType, responseWrapper } from '@core/common/services/http';
import { GetPropertiesParams, isEmpty } from '@core/common/utils';
import { UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { IElementCategory } from '.';
import { ELEMENT_CATEGORY_QUERY_KEY } from '../key';
import { ElementCategoryApi } from '..';
import { SelectOption } from '@vizplatform/react-ui';

export function useGetElementCategories(
  options?: UseQueryOptions<PaginationResponseType<IElementCategory>, Error>
) {
  const [params, setParams] = useState<GetPropertiesParams>({ take: 50, skip: 0 });
  const {
    data,
    error,
    isError,
    isFetching,
    refetch: onGetElementCategories,
  } = useQuery<PaginationResponseType<IElementCategory>, Error>(
    [ELEMENT_CATEGORY_QUERY_KEY.ELEMENT_CATEGORIES, params],
    {
      queryFn: (query) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, ...params] = query.queryKey;
        return responseWrapper<PaginationResponseType<IElementCategory>>(
          ElementCategoryApi.getElementCategories,
          params
        );
      },
      notifyOnChangeProps: ['data', 'isFetching'],
      keepPreviousData: true,
      enabled: !isEmpty(params),
      ...options,
    }
  );

  const queryClient = useQueryClient();

  const handleInvalidateElementCategories = () =>
    queryClient.invalidateQueries([ELEMENT_CATEGORY_QUERY_KEY.ELEMENT_CATEGORIES]);

  const { data: elementCategories = [], hasNext, payloadSize, totalRecords } = data || {};

  const categoryOptions: SelectOption[] = elementCategories.map((category) => ({
    label: category.displayName,
    value: category.id,
  }));

  return {
    elementCategories,
    categoryOptions,
    hasNext,
    payloadSize,
    totalRecords,
    error,
    isError,
    isFetching,
    onGetElementCategories,
    setParams,
    handleInvalidateElementCategories,
  };
}
