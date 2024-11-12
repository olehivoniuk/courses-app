import { createSlice } from '@reduxjs/toolkit'
import {
  fetchCourseById,
  fetchCourses,
  fetchCoursesAdd,
  fetchCoursesUpdate,
  fetchDeleteCourseById,
} from './thunk'
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
        return state.filter((course) => course.id !== action.payload)
      })
      .addCase(fetchCoursesAdd.fulfilled, (state, action) => {
        state.push(action.payload)
      })
      .addCase(fetchCoursesUpdate.fulfilled, (state, { payload }) => {
        const index = state.findIndex((course) => course.id === payload.id)
        if (index !== -1) {
          state[index] = payload
        }
      })
  },
})

export const coursesReducer = coursesSlice.reducer
