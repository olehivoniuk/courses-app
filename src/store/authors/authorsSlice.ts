import { createSlice } from '@reduxjs/toolkit'
import { AuthorType } from './types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () => {
    const response = await fetch('http://localhost:4000/authors/all')
    if (!response.ok) throw new Error('Network response was not ok')
    const authors = await response.json()
    console.log(authors)
    return authors
  },
)

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
