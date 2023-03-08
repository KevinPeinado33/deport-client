import { useCallback } from 'react'

import { store } from '@/common/data/store'

import { IGame } from '../interfaces'
import { 
    getGamesUseCase, 
    addGameUseCase,
    updateGameUseCase
} from '../usecases'

export const gameController = () => {
    
    const getGames = useCallback(() => {
        store.dispatch( getGamesUseCase () )
    }, [])
    
    const addGame = useCallback( (game: IGame) => {
        store.dispatch( addGameUseCase( game ) )
    },[])

    const updateGame = useCallback( (game: IGame) => {
        store.dispatch( 
            updateGameUseCase({ 
                game, 
                id: game.id 
            })
        )
    }, [])

    return {
        getGames,
        addGame,
        updateGame,
    }
    
}