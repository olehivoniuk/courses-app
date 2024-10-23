import React from 'react'
import Header from './components/Header/Header'
import './App.scss'
import Courses from './components/Courses/Courses'
import CourseInfo from './components/CourseInfo/CourseInfo'
import { Grid } from '@mui/material'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import CreateCourse from './components/CreateCourse/CreateCourse'

function App() {
  return (
    <Grid display='flex' flexDirection='column' gap={5}>
      <Header />
      <Routes>
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/courses/:courseId' element={<CourseInfo />} />
        <Route path='/courses/add' element={<CreateCourse />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </Grid>
  )
}

export default App
