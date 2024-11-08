import { createSlice } from '@reduxjs/toolkit'
import { fetchAuthors } from './thunk'
import { AuthorType } from './types'

const initialState: AuthorType[] = []

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      return action.payload.result
    })
  },
})

export const authorsReducer = authorsSlice.reducer
