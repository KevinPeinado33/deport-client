import { configureStore } from '@reduxjs/toolkit'

import uiReducer from './slices/ui.slice'
import { gameReducer } from '@/game/data'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        game: gameReducer
    }
})

export type RootState = ReturnType< typeof store.getState >

export type AppDispatch = typeof store.dispatch
