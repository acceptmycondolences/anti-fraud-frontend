import { PanelRightCloseIcon, PanelRightOpenIcon } from 'lucide-react'

import { useSidebar } from '@/shared/hooks'
import { Button, Container } from '@/shared/ui'

export function Header() {
  const { isOpen, isOpenMobile, toggle } = useSidebar()

  return (
    <header className="border-b py-4">
      <Container>
        <Button onClick={toggle} variant="ghost" size="icon">
          {isOpen || isOpenMobile ? (
            <PanelRightOpenIcon />
          ) : (
            <PanelRightCloseIcon />
          )}
          <span className="sr-only">Toggle</span>
        </Button>
      </Container>
    </header>
  )
}
