import { z } from 'zod'

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, { message: 'Строка должна содержать не менее 4 символов.' }),
  password: z
    .string()
    .trim()
    .min(4, { message: 'Строка должна содержать не менее 4 символов.' }),
})

export type LoginSchema = z.infer<typeof loginSchema>
