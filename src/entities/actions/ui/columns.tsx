import type { ColumnDef } from '@tanstack/react-table'

import type { ActionType } from '@/entities/actions'

export const actionsColumns: ColumnDef<
  Pick<ActionType, 'type' | 'displayName'>
>[] = [
  {
    accessorKey: 'type',
    header: 'Тип',
  },
  {
    accessorKey: 'displayName',
    header: 'Отображаемое имя',
  },
]
