import React from 'react'
import Header from './components/Header/Header'
import './App.scss'
// import Courses from './components/Courses/Courses'
// import { mockedCoursesList, mockedAuthorsList } from './constants'
// import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList'
// import CourseInfo from './components/CourseInfo/CourseInfo'
import { Grid } from '@mui/material'
import Registration from './components/Registration/Registration'

function App() {
  return (
    <Grid display='flex' flexDirection='column' gap={5}>
      <Header />
      {/* <Courses
        mockedCoursesList={mockedCoursesList}
        mockedAuthorsList={mockedAuthorsList}
      />
      <EmptyCourseList />
      <CourseInfo /> */}
      <Registration />
    </Grid>
  )
}

export default App
