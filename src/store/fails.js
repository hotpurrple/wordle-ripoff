import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fails: 0,
}

export const fails = createSlice({
  name: 'fails',
  initialState,
  reducers: {
    increaseFails(state) {
        state.fails++
    }
  },
})

export const { increaseFails} = fails.actions

export default fails.reducer