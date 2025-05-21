import { createBrowserRouter } from 'react-router'

import { App } from '@/app'

import { LoginPage } from '@/pages/login'
import { ErrorPage } from '@/pages/error'
import { HomePage } from '@/pages/home'
import { ActionsPage } from '@/pages/actions'
import { NotFoundPage } from '@/pages/not-found'

export const router = createBrowserRouter([
  {
    id: 'login-page',
    path: '/login',
    Component: LoginPage,
    ErrorBoundary: ErrorPage,
  },
  {
    id: 'app',
    path: '/',
    Component: App,
    ErrorBoundary: ErrorPage,
    children: [
      {
        id: 'home-page',
        index: true,
        Component: HomePage,
      },
      {
        id: 'actions-page',
        path: '/actions',
        Component: ActionsPage,
      },
    ],
  },
  {
    id: 'not-found-page',
    path: '*',
    Component: NotFoundPage,
  },
])
