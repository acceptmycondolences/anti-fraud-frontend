import { useId, useMemo, type ComponentProps } from 'react'

import { FormItemContext } from '@/shared/context'
import { cn } from '@/shared/lib'

export function FormItemProvider({
  className,
  ...props
}: ComponentProps<'div'>) {
  const id = useId()

  const value = useMemo(() => ({ id }), [id])

  return (
    <FormItemContext value={value}>
      <div className={cn('flex flex-col gap-2', className)} {...props} />
    </FormItemContext>
  )
}
