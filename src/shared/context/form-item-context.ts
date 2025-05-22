import { createContext } from 'react'

export interface FormItemContextProps {
  id: string
}

export const FormItemContext = createContext<FormItemContextProps | undefined>(
  undefined
)
