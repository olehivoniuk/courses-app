import { combineReducers } from '@reduxjs/toolkit'
import { authorsReducer } from './authors/authorsSlice'
import { coursesReducer } from './courses/coursesSlice'
import { userReducer } from './user/userSlice'

export const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
