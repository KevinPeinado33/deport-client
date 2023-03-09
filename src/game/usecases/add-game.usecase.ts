import { sportApi } from '@/common/api'
import { AppDispatch } from '@/common/data/store'

import { addGame } from '../data/game-slice.data'
import { IGame } from '../interfaces'
import { showToast } from '@/common/utils'

export const addGameUseCase = ( game: IGame ) => async ( dispatch: AppDispatch ) => {
    
    try {

        const { data } = await sportApi.post< IGame >('/', game)

        dispatch( addGame( data ) )

    } catch ( error: any ) {
        showToast({ 
            message: 'Error al registrar el juego.', 
            type: 'error' 
        })
    }

}

