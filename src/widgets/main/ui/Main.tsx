import { Outlet } from 'react-router'

export function Main() {
  return (
    <main className="h-full py-4">
      <Outlet />
    </main>
  )
}
