import { AppDispatch } from '@/common/data/store'
import { addGame } from '../data/game-slice.data'
import { IGame } from '../interfaces'

export const addGameUseCase = ( game: IGame ) => ( dispatch: AppDispatch ) => {
    
    try {

        dispatch( addGame( game ) )

    } catch ( error ) {
        console.log({ error })
    }

}

