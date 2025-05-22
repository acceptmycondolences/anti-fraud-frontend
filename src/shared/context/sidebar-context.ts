import { createContext } from 'react'

export interface SidebarContextProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isOpenMobile: boolean
  setIsOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggle: () => void
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
)
