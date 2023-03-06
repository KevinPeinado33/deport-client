import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGameState, IGame } from '../interfaces'

const INITIAL_STATE: IGameState = {
    games: []
}

export const gameSlice = createSlice({
    name: 'game',
    initialState: INITIAL_STATE,
    reducers: {
        
        getGames: (state, { payload }: PayloadAction< IGame[] > ) => {
            state.games = payload
        },

        addGame: (state, { payload }: PayloadAction< IGame >) => {
            state.games = [ ...state.games, payload ]
        }

    }
})

export const {
    getGames,
    addGame
} = gameSlice.actions

export default gameSlice.reducer
