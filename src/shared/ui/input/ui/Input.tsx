import type { ComponentProps } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib'

const inputVariants = cva(
  'bg-background placeholder:text-muted-foreground inline-flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs',
  {
    variants: {
      disabled: {
        false: null,
        true: 'disabled:pointer-events-none disabled:opacity-50',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

export function Input({
  disabled,
  type,
  className,
  ...props
}: ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
  const file = type === 'file' && 'file:h-7 file:font-medium'

  return (
    <input
      disabled={disabled}
      type={type}
      className={cn(inputVariants({ disabled, className }), file)}
      {...props}
    />
  )
}
