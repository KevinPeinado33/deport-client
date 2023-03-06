import { createSlice } from '@reduxjs/toolkit'

export interface UiState {
    isOpenDrawer: boolean
}

const initialState: UiState = {
    isOpenDrawer: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {

        openOrCloseDrawer: (state) => {
            state.isOpenDrawer = !state.isOpenDrawer
        }

    }
})

export const {
    openOrCloseDrawer
} = uiSlice.actions

export default uiSlice.reducer
