import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'
import { useAppDispatch, useAppSelector } from 'src/hooks/useAppDispatch'
import { fetchUser } from 'src/store/user/thunk'
import { deleteCourse } from 'src/store/courses/coursesSlice'
import { fetchCourses } from 'src/store/courses/thunk'
import { fetchAuthors } from 'src/store/authors/thunk'

const Courses = () => {
  const dispatch = useAppDispatch()
  const courses = useAppSelector((state) => state.courses)
  const authors = useAppSelector((state) => state.authors)
  const user = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchAuthors())
    dispatch(fetchCourses())
    dispatch(fetchUser())
  }, [dispatch])

  useEffect(() => {
    console.log(user)
  }, [user])

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
          <Grid item xs={12} sm={6} md={8} key={course.title}>
            <CourseCard
              course={course}
              authors={course.authors}
              onDelete={() => handleDeleteCourse(course.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Courses
