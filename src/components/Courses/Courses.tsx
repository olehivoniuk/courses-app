import React from 'react'
import { Grid } from '@mui/material'
import CustomButton from 'src/common/Button/Button'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'

const Courses = ({ mockedCoursesList, mockedAuthorsList }) => {
  return (
    <Grid
      container
      display='flex'
      gap={4}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item display='flex' justifyContent='space-between' width='66.67% '>
        <SearchBar />
        <CustomButton className='add-course-button' variant='contained'>
          Add new course
        </CustomButton>
      </Grid>
      {mockedCoursesList.map((course) => (
        <Grid item xs={12} sm={6} md={8} key={course.id}>
          <CourseCard
            course={course}
            authors={mockedAuthorsList.filter((author) =>
              course.authors.includes(author.id),
            )}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Courses
