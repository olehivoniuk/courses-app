import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'

const Courses = ({ mockedCoursesList, mockedAuthorsList }) => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || []
    setCourses([...storedCourses])
  }, [mockedCoursesList])

  const handleDeleteCourse = (courseId) => {
    const updatedCourses = courses.filter((course) => course.id !== courseId)
    localStorage.setItem('courses', JSON.stringify(updatedCourses))
    setCourses(updatedCourses)
  }

  return (
    <Grid
      container
      display='flex'
      gap={4}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item display='flex' justifyContent='space-between' width='66.67%'>
        <SearchBar />
      </Grid>
      <Grid
        display='flex'
        gap={4}
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={8} key={course.id}>
            <CourseCard
              course={course}
              authors={mockedAuthorsList.filter((author) =>
                course.authors.includes(author.id),
              )}
              onDelete={() => handleDeleteCourse(course.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Courses
