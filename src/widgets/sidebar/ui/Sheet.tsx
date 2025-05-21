import { motion, AnimatePresence } from 'motion/react'

import { SidebarContent } from '@/widgets/sidebar'

import { useSidebar } from '@/shared/hooks'

export function SidebarSheet() {
  const { isOpenMobile, toggle } = useSidebar()

  return (
    <AnimatePresence>
      {isOpenMobile && (
        <>
          <motion.div
            key="sidebar-sheet-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggle}
            aria-hidden={!isOpenMobile}
            className="fixed inset-0 z-50 h-full w-full bg-black/50"
          />

          <motion.div
            key="sidebar-sheet-content"
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            aria-hidden={!isOpenMobile}
            className="fixed inset-y-0 z-50 h-full w-3/4 sm:w-sm"
          >
            <div className="bg-background text-foreground flex h-full w-full flex-col border-r py-4">
              <SidebarContent />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
