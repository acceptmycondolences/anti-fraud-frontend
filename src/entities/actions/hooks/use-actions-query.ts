import { useQuery } from '@tanstack/react-query'

import type {
  ActionResponseType,
  ActionsQueryParamsType,
} from '@/entities/actions'

import { axiosInstance } from '@/shared/api'

export function useActionsQuery({
  params,
}: {
  params?: ActionsQueryParamsType
}) {
  return useQuery({
    queryKey: ['actions', params],
    queryFn: async () =>
      (await axiosInstance.get<ActionResponseType>('/actions', { params }))
        .data,
  })
}
