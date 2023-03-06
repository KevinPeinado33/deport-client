import { useState } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material'

export default function SearchModal() {

    const [ open, setOpen ] = useState( true )

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth >
                <DialogTitle>Buscar</DialogTitle>
                <DialogContent>
                    <TextField
                        margin='dense'
                        id='name'
                        label='Ingrese termino de busqueda ...'
                        type='email'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} color='secondary' >Buscar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
