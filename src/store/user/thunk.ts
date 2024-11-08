import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    if (!token) {
      return rejectWithValue('No token found')
    }
    const response = await fetch('http://localhost:4000/users/me', {
      headers: {
        Authorization: token,
      },
    })
    if (response.ok) {
      const data = await response.json()
      return data
    }
    return rejectWithValue(response.statusText || 'Network response was not ok')
  },
)

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (response.ok) {
        //the response includes the token and user data
        return data
      } else {
        return rejectWithValue(data)
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
