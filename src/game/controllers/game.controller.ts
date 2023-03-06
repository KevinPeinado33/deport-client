import { useCallback } from 'react'

import { store } from '@/common/data/store'

import { IGame } from '../interfaces'
import { 
    getGamesUseCase, 
    addGamgeUseCase 
} from '../usecases'

export const gameController = () => {
    
    const getGames = useCallback(() => {
        store.dispatch( getGamesUseCase () )
    }, [])
    
    const addGame = useCallback( (game: IGame ) => {
        store.dispatch( addGamgeUseCase( game ) )
    },[])

    return {
        getGames,
        addGame
    }
    
}