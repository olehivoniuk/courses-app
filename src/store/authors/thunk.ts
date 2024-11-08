import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () => {
    const response = await fetch('http://localhost:4000/authors/all')
    if (!response.ok) throw new Error('Network response was not ok')
    const authors = await response.json()
    return authors
  },
)
