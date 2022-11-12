import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInputs: [],
    currentWord: ""
}

export const userInput = createSlice({
    name: 'userInput',
    initialState,
    reducers: {
        setUserInput(state, action) {
            state.userInputs = [...state.userInputs, action.payload]
        },
        setCurrentWord(state,action) {
            state.currentWord = action.payload
        }
    },
})

export const { setUserInput, setCurrentWord } = userInput.actions

export default userInput.reducer