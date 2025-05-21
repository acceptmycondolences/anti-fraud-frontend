import { useId, type ComponentProps } from 'react'

import { FormItemContext } from '@/shared/context'
import { cn } from '@/shared/lib'

export function FormItemProvider({
  className,
  ...props
}: ComponentProps<'div'>) {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn('flex flex-col gap-2', className)} {...props} />
    </FormItemContext.Provider>
  )
}
