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

export const fetchCourseById = createAsyncThunk(
  'courses/fetchCourseById',
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:4000/courses/${courseId}`)
      if (!response.ok) throw new Error('Network response was not ok')
      const course = await response.json()
      return course
    } catch (error) {
      console.error('Error fetching the course:', error)
      return rejectWithValue(error.message)
    }
  },
)
