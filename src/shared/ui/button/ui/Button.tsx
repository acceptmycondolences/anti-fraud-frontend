import type { ComponentProps } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib'

const buttonVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors',
  {
    variants: {
      variant: {
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        outline:
          'hover:bg-accent hover:text-accent-foreground border shadow-xs',
        teal: 'hover:bg-teal/90 bg-teal text-teal-foreground shadow-xs',
        green: 'hover:bg-green/90 bg-green text-green-foreground shadow-xs',
      },
      size: {
        text: 'px-4 py-2 text-sm font-medium whitespace-nowrap',
        icon: "size-9 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        textAndIcon:
          "gap-2 px-4 py-2 text-sm px-4 py-2 font-medium whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      },
      disabled: {
        false: null,
        true: 'disabled:pointer-events-none disabled:opacity-50',
      },
    },
    defaultVariants: {
      size: 'text',
      disabled: false,
    },
  }
)

export function Button({
  variant,
  size,
  disabled,
  className,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      disabled={disabled}
      className={cn(buttonVariants({ variant, size, disabled, className }))}
      {...props}
    />
  )
}
