import React from 'react'
import Header from './components/Header/Header'
import './App.scss'
import Courses from './components/Courses/Courses'
import { mockedCoursesList, mockedAuthorsList } from './constants'
// import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList'
import CourseInfo from './components/CourseInfo/CourseInfo'
import { Grid } from '@mui/material'
// import AddNewCourse from './components/Courses/components/AddNewCourse/AddNewCourse'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Grid display='flex' flexDirection='column' gap={5}>
      <Header />
      {/* <AddNewCourse /> */}
      {/* 
      <EmptyCourseList />
      */}

      <Routes>
        <Route
          path='/'
          element={
            <Courses
              mockedCoursesList={mockedCoursesList}
              mockedAuthorsList={mockedAuthorsList}
            />
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/courses/:courseId' element={<CourseInfo />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Grid>
  )
}

export default App
