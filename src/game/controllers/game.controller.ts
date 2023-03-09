import { useCallback } from 'react'

import { store }       from '@/common/data/store'
import { IGame }       from '../interfaces'
import { 
    getGamesUseCase, 
    addGameUseCase,
    updateGameUseCase
}                      from '../usecases'


export const gameController = () => {

    /**
     * metodos que manejan la logica de toda la vista
     * puede ser por pagina
     */    
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

    /**
     * exponemos los metodos y variables que vayan a usar
     * en la vista
     */
    return {
        getGames,
        addGame,
        updateGame
    }
    
}