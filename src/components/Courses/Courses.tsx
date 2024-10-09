import { Grid } from '@mui/material'
import React from 'react'
import CustomButton from 'src/common/Button/Button'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'

const Courses = ({ mockedCoursesList, mockedAuthorsList }) => {
  return (
    <Grid>
      <SearchBar />
      <CourseCard />
      <CustomButton
        buttonText='Add new course'
        onClick={undefined}
        className={undefined}
        variant='contained'
      />
    </Grid>
  )
}

export default Courses
