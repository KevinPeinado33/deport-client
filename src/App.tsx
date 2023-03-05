import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { ErrorPage } from '@/pages/error'
import { Root } from '@/routes/root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'auth/login'
  }
])

const App = () => {
  return ( 
    <RouterProvider router={ router }/>
  )
}

export default App
