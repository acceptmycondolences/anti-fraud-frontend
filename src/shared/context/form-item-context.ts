import { createContext } from 'react'

export type FormItemContextProps = {
  id: string
}

export const FormItemContext = createContext<FormItemContextProps | undefined>(
  undefined
)
