import { combineReducers } from '@reduxjs/toolkit'
import { coursesReducer } from './courses/reducer'

export const rootReducer = combineReducers({
  courses: coursesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
