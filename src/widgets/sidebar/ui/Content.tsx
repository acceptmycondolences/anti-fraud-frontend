import { useLocation, useNavigate } from 'react-router'

import {
  CalendarDaysIcon,
  LogOutIcon,
  UserIcon,
  UserLockIcon,
  UsersIcon,
  WaypointsIcon,
  XIcon,
} from 'lucide-react'

import { useSidebar } from '@/shared/hooks'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui'

const ROUTES = [
  {
    id: 1,
    label: 'Инциденты',
    path: '/incidents',
    icon: <CalendarDaysIcon />,
  },
  {
    id: 2,
    label: 'Серые агенты',
    path: '/gray-agents',
    icon: <UsersIcon />,
  },
  {
    id: 3,
    label: 'Черный список',
    path: '/black-list',
    icon: <UserLockIcon />,
  },
]

export function SidebarContent() {
  const location = useLocation()
  const navigate = useNavigate()

  const { isMobile, isOpenMobile, toggle } = useSidebar()

  return (
    <>
      <div className="flex justify-between border-b px-4 pb-4">
        <Button
          onClick={() => void navigate('/')}
          variant="teal"
          size="icon"
          className="rounded-full"
        >
          <UserIcon />
          <span className="sr-only">User</span>
        </Button>

        {isMobile && (
          <Button
            onClick={toggle}
            size="icon"
            className="text-foreground/70 hover:text-foreground"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Button>
        )}
      </div>

      <div className="mb-4 h-full overflow-y-auto px-4 pt-4">
        <ul className="space-y-2">
          {ROUTES.map((route) => (
            <li key={route.id}>
              <Button
                variant="ghost"
                size="textAndIcon"
                className={cn(
                  'w-full justify-start',
                  route.path === location.pathname &&
                    'bg-accent text-accent-foreground'
                )}
              >
                {route.icon}
                {route.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="px-4 pb-4">
          <Button
            onClick={() => {
              void navigate('/actions')

              if (isOpenMobile) {
                toggle()
              }
            }}
            variant="ghost"
            size="textAndIcon"
            className={cn(
              'w-full justify-start',
              location.pathname === '/actions' &&
                'bg-accent text-accent-foreground'
            )}
          >
            <WaypointsIcon />
            Действия
          </Button>
        </div>

        <div className="border-t px-4 pt-4">
          <Button
            variant="ghost"
            size="textAndIcon"
            className="w-full justify-start"
          >
            <LogOutIcon />
            Выйти
          </Button>
        </div>
      </div>
    </>
  )
}
