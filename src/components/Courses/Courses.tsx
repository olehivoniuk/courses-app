import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'
import {
  fetchCourses as fetchCoursesService,
  fetchAuthors as fetchAuthorsService,
} from '../../services'
import { saveCoursesAction } from '../../store/courses/actions'
import { RootState } from '../../store/rootReducer'
import { saveAuthorsAction } from 'src/store/authors/actions'

const Courses = () => {
  const dispatch = useDispatch()

  const courses = useSelector((state: RootState) => state.courses)
  const authors = useSelector((state: RootState) => state.authors)

  useEffect(() => {
    async function fetchAndStoreData() {
      try {
        const fetchedCourses = await fetchCoursesService()
        dispatch(saveCoursesAction(fetchedCourses.result))
        const fetchedAuthors = await fetchAuthorsService()
        dispatch(saveAuthorsAction(fetchedAuthors.result))
      } catch (error) {
        console.error('Failed to load data:', error)
      }
    }

    fetchAndStoreData()
  }, [dispatch])

  const coursesWithAuthorNames = courses.map((course) => ({
    ...course,
    authors: course.authors.map(
      (authorId) => authors.find((author) => author.id === authorId)?.name,
    ),
  }))

  // Assuming you're managing course deletion through Redux, update this function accordingly
  const handleDeleteCourse = (courseId) => {
    // Dispatch an action to delete the course from the Redux store
    // dispatch(deleteCourseAction(courseId));
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
