import { combineReducers } from '@reduxjs/toolkit'
import { authorsReducer } from './authors/reducer'
import { coursesReducer } from './courses/reducer'
import { userReducer } from './user/reducer'

export const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
