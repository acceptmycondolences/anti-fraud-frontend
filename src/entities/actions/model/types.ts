import type { QueryParamsType, ResponseType } from '@/shared/model'

interface ConfigurationType {
  type: string
  attributeGetter: string
  attributeType: string
  durationType: string
  reason: string
}

interface ActionType {
  id: string
  type: string
  name: string
  displayName: string
  configuration: ConfigurationType
}

type ActionResponseType = ResponseType<ActionType>

type ActionsQueryParamsType =
  | Partial<QueryParamsType>
  | Pick<ActionType, 'type' | 'name'>

export type {
  ConfigurationType,
  ActionType,
  ActionResponseType,
  ActionsQueryParamsType,
}
