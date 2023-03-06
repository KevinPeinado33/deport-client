import {
  createBrowserRouter
} from 'react-router-dom'

import { GameLayout } from '@/common/components/layouts'
import { BestPage, GamePage, GameInfoPage, CurrentPage, PastPage, SearchPage } from '@/game/pages'
import { ErrorPage } from '@/common/pages/Error'

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
    }
])
