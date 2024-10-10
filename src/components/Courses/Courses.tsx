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
      <Grid item xs={12}>
        <SearchBar />
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
      <Grid item xs={12}>
        <CustomButton
          onClick={() => console.log('Add new course')}
          className='add-course-button'
          variant='contained'
        >
          Add new course{' '}
        </CustomButton>
      </Grid>
    </Grid>
  )
}

export default Courses
