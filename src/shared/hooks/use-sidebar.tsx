import { use } from 'react'

import { SidebarContext } from '@/shared/context'

export function useSidebar() {
  const context = use(SidebarContext)

  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}
