import {
  createBrowserRouter
} from 'react-router-dom'

import { GameLayout, AuthLayout } from '@/common/components/layouts'
import { ErrorPage } from '@/common/pages/Error'
import { 
  BestPage, 
  GamePage, 
  GameInfoPage, 
  CurrentPage, 
  PastPage, 
  SearchPage 
} from '@/game/pages'
import { 
  LoginPage, 
  RegisterPage 
} from '@/auth/pages'
import {
  CreateTeamPage,
  EditTeamPage,
  MyTeamsPage
} from '@/team/pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <GameLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <GamePage />
          },
          {
            path: ':gameId',
            element: <GameInfoPage />
          },
          {
            path: 'best',
            element: <BestPage />
          },
          {
            path: 'current',
            element: <CurrentPage />
          },
          {
            path: 'past',
            element: <PastPage />
          },
          {
            path: 'search/:term',
            element: <SearchPage />
          }
        ]
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          index: true,
          element: <LoginPage />
        },
        {
          path: 'register',
          element: <RegisterPage />
        }
      ]
    },
    {
      path: '/admin',
      element: <>prueba</>,
      children: [
        {
          index: true,
          element: <MyTeamsPage />
        },
        {
          path: 'create-team',
          element: <CreateTeamPage />
        },
        {
          path: ':id/edit',
          element: <EditTeamPage />
        }
      ]
    }
])
