import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { ErrorPage } from './pages/Error'
import { Root } from './routes/root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  }
])

const App = () => {
  return ( 
    <RouterProvider router={ router }/>
  )
}

export default App
