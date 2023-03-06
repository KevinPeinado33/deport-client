import { AppDispatch } from '@/common/data/store'
import { getGames } from '../data/game-slice.data'

export const getGamesUseCase = () => ( dispatch: AppDispatch ) => {
    
    try {
        getGames([])
    } catch ( error ) {
        console.log({ error })
    }

}

