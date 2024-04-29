// import { TaskTypeNameTag } from '@components';
// import { SelectLazyOption } from '@core/components/Form/FormMultiSelectLazy';
// import { cleanValueSearchInput } from '@modules/work-queue/utils';
// import { UseInfiniteQueryOptions, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
// import { useDebounce } from '@vizplatform/react-hooks';
// import { SelectOptionsProps, Stack, Typography } from '@vizplatform/react-ui';
// import { isEmpty } from 'lodash';
// import { useMemo, useState } from 'react';
// import { GetTasksParams, ITask, TasksApi } from '..';
// import { QUERIES_WORK_QUEUE } from '../../work-queue.keys';

// const defaultSearch = {
//   take: 10,
//   skip: 0,
// };

// const mapFontsOptions = (task: ITask[]): SelectLazyOption[] => {
//   if (isEmpty(task)) return [];

//   return task.map((item) => ({
//     label: item.title,
//     optionLabel: (
//       <Stack direction="row">
//         <TaskTypeNameTag value={item.taskType} />
//         <Typography ml={1} fontSize="14px">
//           {item.title}
//         </Typography>
//       </Stack>
//     ),
//     value: item.id,
//     optionContent: (props: SelectOptionsProps) => (
//       <Stack direction="row">
//         <TaskTypeNameTag value={item.taskType} />
//         <Typography ml={1} fontSize="14px">
//           {item.title}
//         </Typography>
//       </Stack>
//     ),
//   }));
// };

// export function useGetTaskOptionLazy(
//   options?: UseInfiniteQueryOptions<PaginationResponseType<ITask>, Error>,
// ) {
//   const [inputSearch, setInputSearch] = useState<string>('');
//   const [params, setParams] = useState<GetTasksParams>(null);
//   const debounceSearch = useDebounce(inputSearch);

//   const {
//     data,
//     error,
//     isError,
//     isFetching,
//     refetch: onGetTasks,
//     fetchNextPage,
//   } = useInfiniteQuery<PaginationResponseType<ITask>, Error>(
//     [QUERIES_WORK_QUEUE.TASKS, 'options', debounceSearch, params, { type: 'lazy' }],
//     (props): Promise<PaginationResponseType<ITask>> => {
//       const { pageParam = defaultSearch } = props;

//       return responseWrapper<PaginationResponseType<ITask>>(TasksApi.getTasks, [
//         { ...pageParam, ...params, search: cleanValueSearchInput(inputSearch) },
//       ]);
//     },
//     {
//       keepPreviousData: true,
//       getNextPageParam(lastPage, allPages) {
//         if (lastPage.data?.length < 10) return undefined;
//         return {
//           take: 10,
//           skip: allPages.length * 10,
//         };
//       },
//       notifyOnChangeProps: ['data', 'isFetching'],
//       enabled: !isEmpty(params) || !isEmpty(inputSearch),
//       ...options,
//     },
//   );

//   const taskOptions: SelectLazyOption[] = useMemo(() => {
//     if (isEmpty(data?.pages)) return [];
//     return data.pages.reduce(
//       (state, page, _pageIdx) => [...state, ...mapTasksOptions(page.data)],
//       [],
//     );
//   }, [data]);

//   const hasNext = useMemo(() => {
//     if (isEmpty(data?.pages)) return null;
//     return data.pages[data.pages.length - 1]?.hasNext;
//   }, [data]);

//   const queryClient = useQueryClient();

//   const handleInvalidateTasks = () => queryClient.invalidateQueries([QUERIES_WORK_QUEUE.TASKS]);

//   return {
//     taskOptions,
//     hasNext,
//     error,
//     isError,
//     isFetching,
//     inputSearch,
//     setInputSearch,
//     fetchNextPage,
//     setParams,
//     onGetTasks,
//     handleInvalidateTasks,
//   };
// }
