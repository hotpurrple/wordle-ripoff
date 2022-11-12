import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wordToAnalyze: ""
}

export const wordToAnalyze = createSlice({
    name: 'wordToAnalyze',
    initialState,
    reducers: {
        setWordToAnalyze(state, action) {
            state.wordToAnalyze = action.payload
        }
    },
})

export const { setWordToAnalyze } = wordToAnalyze.actions

export default wordToAnalyze.reducer