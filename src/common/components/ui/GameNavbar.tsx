import { useState } from 'react'
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Badge
} from '@mui/material'

import { SearchOutlined } from '@mui/icons-material'
import { openOrCloseDrawer } from '@/common/data/slices/ui.slice'

export const GameNavbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ isSearchVisible, setIsSearchVisible ] = useState(false)

  return (
    <AppBar>
      <Toolbar>

        <ReactLink to='/' style={{  textDecoration: 'none' }}>
          <Typography>
            Q Deport
          </Typography>
        </ReactLink>

        <Box flex={1} />

        <Box
          sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
          display='flex' >

          <ReactLink to='best' style={{  textDecoration: 'none' }}>
              <Badge color='success' variant='dot' sx={{ mr: 1 }}>
                <Button >
                  Mejores
                </Button>
              </Badge>
          </ReactLink>

          <ReactLink to='current' style={{  textDecoration: 'none' }}>
            <Button sx={{ mr: 1 }}>
              Actuales
            </Button>
          </ReactLink>

          <ReactLink to='past' style={{  textDecoration: 'none' }}>
            <Button>
              Pasados
            </Button>
          </ReactLink>

        </Box>

        <Box flex={1} />

        <IconButton
          onClick={() => navigate('search/123') }
        >
          <SearchOutlined />
        </IconButton>

        <Button
          onClick={() => dispatch( openOrCloseDrawer() )}
        >
          Menu
        </Button>

      </Toolbar>
    </AppBar>
  )
}
