import React from 'react'
import Header from './components/Header/Header'
import './App.scss'
// import Courses from './components/Courses/Courses'
// import { mockedCoursesList, mockedAuthorsList } from './constants'
// import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList'
// import CourseInfo from './components/CourseInfo/CourseInfo'
import { Grid } from '@mui/material'
import AddNewCourse from './components/Courses/components/AddNewCourse/AddNewCourse'
// import Registration from './components/Registration/Registration'
// import Login from './components/Login/Login'

function App() {
  return (
    <Grid display='flex' flexDirection='column' gap={5}>
      <Header />
      <AddNewCourse />
      {/* <Courses
        mockedCoursesList={mockedCoursesList}
        mockedAuthorsList={mockedAuthorsList}
      />
      <EmptyCourseList />
      <CourseInfo /> */}
      {/* <Registration /> */}
      {/* <Login /> */}
    </Grid>
  )
}

export default App
