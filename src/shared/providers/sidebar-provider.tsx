import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

import { SidebarContext, type SidebarContextProps } from '@/shared/context'
import { useMediaQueryList } from '@/shared/hooks'

export function SidebarProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(true)
  const [isOpenMobile, setIsOpenMobile] = useState(false)

  const isMobile = useMediaQueryList('(max-width: 767px)')

  const toggle = useCallback(() => {
    return !isMobile
      ? setIsOpen((previousValue) => !previousValue)
      : setIsOpenMobile((previousValue) => !previousValue)
  }, [isMobile])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLocaleLowerCase() === 'b'
      ) {
        event.preventDefault()

        toggle()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle])

  const value = useMemo<SidebarContextProps>(
    () => ({
      isOpen,
      setIsOpen,
      isOpenMobile,
      setIsOpenMobile,
      isMobile,
      toggle,
    }),
    [isOpen, isOpenMobile, isMobile, toggle]
  )

  return <SidebarContext value={value}>{children}</SidebarContext>
}
