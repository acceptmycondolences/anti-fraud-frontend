import { PlusIcon } from 'lucide-react'

import { actionsColumns } from '@/entities/actions'

import { Button, Container, DataTable } from '@/shared/ui'

const INITIAL_DATA = [
  {
    type: 'SendToBlockAction',
    displayName: 'Отправка карты на блокировку',
  },
]

export function ActionsPage() {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-8 md:gap-6.5">
            <div className="flex items-center justify-end gap-2">
              <Button variant="green" size="textAndIcon">
                <PlusIcon />
                Добавить
              </Button>
            </div>

            <DataTable columns={actionsColumns} data={INITIAL_DATA} />
          </div>

          <div>Поля</div>
        </div>
      </Container>
    </section>
  )
}
