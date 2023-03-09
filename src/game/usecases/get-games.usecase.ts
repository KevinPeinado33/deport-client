import { AppDispatch } from '@/common/data/store'
import { sportApi } from '@/common/api'

import { getGames } from '../data/game-slice.data'
import { IGame } from '../interfaces'

export const getGamesUseCase = () => async ( dispatch: AppDispatch ) => {
    
    try {

        const { data } = await sportApi.get< IGame[] >('/')

        getGames( data )
        
    } catch ( error ) {
        console.log({ error })
    }

}

