import {
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@mui/material'

import { router } from '@/routes'
import { lightTheme } from './common/themes'
import { store } from '@/common/data/store'

const App = () => {
  return ( 
    <Provider store={ store } >
      <ThemeProvider theme={ lightTheme} >
        <CssBaseline />
        <RouterProvider router={ router } />
      </ThemeProvider>
    </Provider>
  )
}

export default App
