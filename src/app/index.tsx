import { Sidebar } from '@/widgets/sidebar'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main'

export function App() {
  return (
    <div className="flex min-h-svh flex-col md:flex-row">
      <Sidebar />

      <div className="flex flex-[1_1_0%] flex-col">
        <Header />
        <Main />
      </div>
    </div>
  )
}
