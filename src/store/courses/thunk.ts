import { createAsyncThunk } from '@reduxjs/toolkit'
import { CourseData, CourseResponse, CourseType } from './types'

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

export const fetchDeleteCourseById = createAsyncThunk(
  'courses/fetchDeleteCourseById',
  async (courseId: string, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    if (!token) {
      return rejectWithValue('No token found')
    }
    try {
      const response = await fetch(
        `http://localhost:4000/courses/${courseId}`,
        {
          headers: {
            Authorization: token,
          },
          method: 'DELETE',
        },
      )
      if (!response.ok) throw new Error('Network response was not ok')
      return courseId
    } catch (error) {
      console.error('Error deleting the course:', error)
      return rejectWithValue(error.message)
    }
  },
)

export const fetchCoursesAdd = createAsyncThunk<
  CourseType,
  CourseData,
  { rejectValue: string }
>('courses/fetchCoursesAdd', async (courseData, { rejectWithValue }) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return rejectWithValue('No token found')
  }
  try {
    const response = await fetch(`http://localhost:4000/courses/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(courseData),
    })
    if (!response.ok) throw new Error('Network response was not ok')
    const responseData: CourseResponse = await response.json()
    if (responseData.successful) {
      return responseData.result
    } else {
      throw new Error('Failed to get a successful response')
    }
  } catch (error) {
    console.error('Error adding the course:', error)
    return rejectWithValue(error.message as string)
  }
})
