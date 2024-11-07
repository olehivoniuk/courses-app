import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchAuthors } from 'src/store/authors/authorsSlice'
import { deleteCourse, fetchCourses } from 'src/store/courses/coursesSlice'
import { useAppDispatch, useAppSelector } from 'src/hooks/useAppDispatch'

const Courses = () => {
  const dispatch = useAppDispatch()
  const courses = useAppSelector((state) => state.courses)
  const authors = useAppSelector((state) => state.authors)
  // Now, using useAppSelector instead of useSelector directly

  useEffect(() => {
    dispatch(fetchAuthors())
    dispatch(fetchCourses())
  }, [dispatch])

  const coursesWithAuthorNames = courses.map((course) => ({
    ...course,
    authors: course.authors.map(
      (authorId) => authors.find((author) => author.id === authorId)?.name,
    ),
  }))

  const handleDeleteCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId))
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
        {coursesWithAuthorNames.map((course) => (
          <Grid item xs={12} sm={6} md={8} key={course.id}>
            <CourseCard
              course={course}
              authors={course.authors} // Passing an array of author names
              onDelete={() => handleDeleteCourse(course.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Courses
