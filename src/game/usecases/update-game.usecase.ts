import { AppDispatch } from '@/common/data/store'
import { addGame } from '../data/game-slice.data'
import { IGame } from '../interfaces'

interface Props {
    game: IGame
    id  : string
}

export const updateGameUseCase = ({ game, id }: Props) => ( dispatch: AppDispatch ) => {
    
    try {

        dispatch( addGame( game ) )

    } catch ( error ) {
        console.log({ error })
    }

}


