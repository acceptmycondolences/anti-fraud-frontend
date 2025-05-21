import { SidebarContent, SidebarSheet } from '@/widgets/sidebar'

import { useSidebar } from '@/shared/hooks'

export function Sidebar() {
  const { isMobile, isOpen } = useSidebar()

  if (isMobile) {
    return <SidebarSheet />
  }

  return (
    <div aria-hidden={!isOpen} className="group hidden md:block">
      <div className="w-3xs transition-[width] duration-300 ease-linear group-aria-hidden:w-0">
        <div className="fixed inset-y-0 left-0 z-10 h-svh w-3xs transition-[left] duration-300 ease-linear group-aria-hidden:left-[calc(var(--container-3xs)*-1)]">
          <div className="bg-sidebar text-sidebar-foreground flex h-full w-full flex-col border-r py-4">
            <SidebarContent />
          </div>
        </div>
      </div>
    </div>
  )
}
