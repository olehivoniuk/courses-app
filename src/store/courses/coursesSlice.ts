import { createSlice } from '@reduxjs/toolkit'
import { fetchCourseById, fetchCourses } from './thunk'
import { CourseType } from './types'

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
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        return action.payload.result
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.push(action.payload.result)
      })
  },
})
export const { deleteCourse } = coursesSlice.actions

export const coursesReducer = coursesSlice.reducer
