import {
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'

import { lightTheme } from '@/common/themes'
import { store } from '@/common/data/store'

import { router } from '@/routes'

import 'react-toastify/dist/ReactToastify.css'

const client = new QueryClient()

const App = () => {
  return ( 
    <QueryClientProvider client={ client } >
      <ReactQueryDevtools />
      <Provider store={ store } >
        <ThemeProvider theme={ lightTheme} >
          <CssBaseline />
          <ToastContainer />
          <RouterProvider router={ router } />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
