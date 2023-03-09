import { sportApi } from '@/common/api'
import { AppDispatch } from '@/common/data/store'

import { addGame } from '../data/game-slice.data'
import { IGame } from '../interfaces'

export const addGameUseCase = ( game: IGame ) => async ( dispatch: AppDispatch ) => {
    
    try {

        const { data } = await sportApi.post< IGame >('/', game)

        dispatch( addGame( data ) )

    } catch ( error ) {
        console.log({ error })
    }

}

