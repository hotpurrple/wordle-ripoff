import { createSlice } from '@reduxjs/toolkit'
import randomWord from '../words.mjs'

const initialState = {
    word: randomWord
}

export const targetWord = createSlice({
  name: 'targetWord',
  initialState,
  reducers: {
        isCorrect(state, action) {
            return state.word.toLowerCase().trim() === action.payload.toLowerCase().trim()
        }
  },
})

export const { isCorrect } = targetWord.actions

export default targetWord.reducer