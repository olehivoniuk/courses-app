import { createSlice } from '@reduxjs/toolkit'
import { fetchCourseById, fetchCourses, fetchDeleteCourseById } from './thunk'
import { CourseType } from './types'

const initialState: CourseType[] = []

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        return action.payload.result
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.push(action.payload.result)
      })
      .addCase(fetchDeleteCourseById.fulfilled, (state, action) => {
        return state.filter((course) => course.id !== action.payload) // Use action.payload directly as it is the courseId
      })
  },
})

export const coursesReducer = coursesSlice.reducer
