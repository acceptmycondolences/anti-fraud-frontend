import { useContext } from 'react'

import { FormItemContext } from '@/shared/context'

export function useFormItem() {
  const context = useContext(FormItemContext)

  if (context === undefined) {
    throw new Error('useFormItem must be used within a FormItemProvider.')
  }

  return context
}
