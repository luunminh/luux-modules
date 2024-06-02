import { PaginationResponseType, responseWrapper } from '@core/common/services/http';
import { isEmpty } from '@core/common/utils';
import { UseQueryOptions, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { UserApi } from '..';
import { SHARED_USER_QUERY_KEY } from '../key';
import { GetUsersParams, IUsers } from './useGetUsers.types';

export function useGetUsers(
  options?: UseQueryOptions<PaginationResponseType<IUsers>, Error> & {
    isFilterByEmail?: boolean;
  },
) {
  const [params, setParams] = useState<GetUsersParams>({});
  const {
    data,
    error,
    isError,
    isFetching,
    refetch: onGetUsers,
  } = useQuery<PaginationResponseType<IUsers>, Error>([SHARED_USER_QUERY_KEY.USERS, params], {
    queryFn: (query) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...params] = query.queryKey;
      return responseWrapper<PaginationResponseType<IUsers>>(UserApi.getUsers, params);
    },
    notifyOnChangeProps: ['data', 'isFetching'],
    keepPreviousData: true,
    enabled: options?.isFilterByEmail
      ? !isEmpty(params) && isEmpty(params.emails)
      : !isEmpty(params),
    ...options,
  });

  const queryClient = useQueryClient();

  const handleInvalidateUsers = () => queryClient.invalidateQueries([SHARED_USER_QUERY_KEY.USERS]);

  const { data: users = [], hasNext, payloadSize, totalRecords } = data || {};

  return {
    users,
    hasNext,
    payloadSize,
    totalRecords,
    error,
    isError,
    isFetching,
    onGetUsers,
    params,
    setParams,
    handleInvalidateUsers,
  };
}
