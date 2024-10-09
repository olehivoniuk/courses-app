import React from 'react'
import Header from './components/Header/Header'
import './App.scss'
import Courses from './components/Courses/Courses'
import { mockedCoursesList, mockedAuthorsList } from './constants'

function App() {
  return (
    <>
      <Header />
      <Courses
        mockedCoursesList={mockedCoursesList}
        mockedAuthorsList={mockedAuthorsList}
      />
    </>
  )
}

export default App
