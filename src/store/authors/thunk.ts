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

export const fetchPostAuthors = createAsyncThunk(
  'authors/fetchPostAuthors',
  async (authorName: string, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        return rejectWithValue('No token found')
      }
      const response = await fetch(`http://localhost:4000/authors/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ name: authorName }),
      })
      if (!response.ok) throw new Error('Network response was not ok')
      const author = await response.json()
      return author.result
    } catch (error) {
      console.error('Error adding the author:', error)
      return rejectWithValue(error.message)
    }
  },
)
