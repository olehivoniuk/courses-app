import { combineReducers } from '@reduxjs/toolkit'
import { authorsReducer } from './authors/reducer'
import { coursesReducer } from './courses/reducer'

export const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
