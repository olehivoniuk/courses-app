import { createSlice } from '@reduxjs/toolkit'
import { CourseType } from './types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await fetch('http://localhost:4000/courses/all')
    if (!response.ok) throw new Error('Network response was not ok')
    const courses = await response.json()
    return courses
  },
)

const initialState: CourseType[] = []

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    deleteCourse: (state, action) => {
      return state.filter((course) => course.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      return action.payload.result
    })
  },
})
export const { deleteCourse } = coursesSlice.actions

export const coursesReducer = coursesSlice.reducer
