import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../data/store'
import {
    Box, 
    Divider, 
    Drawer, 
    IconButton, 
    Input, 
    InputAdornment, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    ListSubheader 
} from '@mui/material'
import { 
    AccountCircleOutlined, 
    AdminPanelSettings,
    LoginOutlined, 
    HistoryOutlined, 
    SearchOutlined, 
    VpnKeyOutlined,
    Diversity1Outlined,
    Diversity2Outlined,
    SportsScoreOutlined,
    HistoryToggleOffOutlined,
    LocalFireDepartmentOutlined,
    SportsVolleyballOutlined
} from '@mui/icons-material'
import { openOrCloseDrawer } from '@/common/data/slices/ui.slice'
import { useNavigate } from 'react-router-dom'

export const GameSidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isOpenDrawer } = useSelector((state: RootState) => state.ui)

    const changePage = (url: string) => {
        dispatch( openOrCloseDrawer() )
        navigate( url )
    }

    return (
        <Drawer
            open={ isOpenDrawer }
            onClose={ () => dispatch( openOrCloseDrawer() ) }
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>
                <List>
                   
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Perfil'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <SportsScoreOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Partidos'} />
                    </ListItem>
                    
                    <ListItem button>
                        <ListItemIcon>
                            <Diversity2Outlined />
                        </ListItemIcon>
                        <ListItemText primary={'Equipos'} />
                    </ListItem>

                    <ListItem 
                        button 
                        onClick={ () => changePage('best') }
                        sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <LocalFireDepartmentOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Mejores'} />
                    </ListItem>

                    <ListItem 
                        button 
                        onClick={ () => changePage('current') }
                        sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <SportsVolleyballOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Actuales'} />
                    </ListItem>

                    <ListItem 
                        button 
                        onClick={ () => changePage('past') }
                        sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <HistoryOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Pasados'} />
                    </ListItem>

                    <ListItem 
                        button
                    >
                        <ListItemIcon>
                            <LoginOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Salir'} />
                    </ListItem>
                    <ListItem 
                        button
                    >
                        <ListItemIcon>
                            <VpnKeyOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Ingresar'} />
                    </ListItem>

                    <Divider />
                    <ListSubheader>Admin Panel</ListSubheader>

                    <ListItem button>
                        <ListItemIcon>
                            <Diversity1Outlined />
                        </ListItemIcon>
                        <ListItemText primary={'Mi equipo'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HistoryToggleOffOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Mis partidos'} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <AdminPanelSettings />
                        </ListItemIcon>
                        <ListItemText primary={'Informacion'} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}
