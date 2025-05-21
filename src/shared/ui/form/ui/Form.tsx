import type { ComponentProps } from 'react'

import { FormProvider } from 'react-hook-form'

import { FormFieldProvider, FormItemProvider } from '@/shared/providers'
import { useFormField } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { Label } from '@/shared/ui'

const Form = FormProvider

const FormField = FormFieldProvider

const FormItem = FormItemProvider

function FormLabel({ className, ...props }: ComponentProps<'label'>) {
  return <Label className={className} {...props} />
}

function FormControl({ ...props }: ComponentProps<'div'>) {
  const { error, formDescriptionId, formMessageId } = useFormField()

  return (
    <div
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()

  const body = error ? String(error?.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <p
      id={formMessageId}
      className={cn('text-red text-sm font-medium', className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
}
