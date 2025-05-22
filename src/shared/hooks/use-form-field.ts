import { use } from 'react'

import { useFormContext, useFormState } from 'react-hook-form'

import { FormFieldContext } from '@/shared/context'
import { useFormItem } from '@/shared/hooks'

export function useFormField() {
  const context = use(FormFieldContext)

  const { getFieldState } = useFormContext()

  if (context === undefined) {
    throw new Error('useFormField must be used within a FormFieldProvider.')
  }

  const formState = useFormState({ name: context.name })

  const fieldState = getFieldState(context.name, formState)

  const { id } = useFormItem()

  return {
    id,
    name: context.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
