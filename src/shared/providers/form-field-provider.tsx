import { useMemo } from 'react'

import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'

import { FormFieldContext } from '@/shared/context'

export function FormFieldProvider<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  const value = useMemo(() => ({ name: props.name }), [props.name])

  return (
    <FormFieldContext value={value}>
      <Controller {...props} />
    </FormFieldContext>
  )
}
