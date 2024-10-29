import { combineReducers } from '@reduxjs/toolkit'
import { coursesReducer } from './courses/reducer'

const rootReducer = combineReducers({
  courses: coursesReducer,
})

export default rootReducer
