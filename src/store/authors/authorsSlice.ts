import { createSlice } from '@reduxjs/toolkit'
import { fetchAuthors, fetchPostAuthors } from './thunk'
import { AuthorType } from './types'

const initialState: AuthorType[] = []

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        return action.payload.result
      })
      .addCase(fetchPostAuthors.fulfilled, (state, action) => {
        state.push(action.payload)
      })
  },
})

export const authorsReducer = authorsSlice.reducer
