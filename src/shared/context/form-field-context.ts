import { createContext } from 'react'

import type { FieldPath, FieldValues } from 'react-hook-form'

export interface FormFieldContextProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName
}

export const FormFieldContext = createContext<
  FormFieldContextProps | undefined
>(undefined)
