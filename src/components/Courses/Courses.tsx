import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import CourseCard from './components/CourseCard/CourseCard'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchCourses as fetchCoursesService } from '../../services'
import { saveCoursesAction } from '../../store/courses/actions' // Update path as necessary
import { RootState } from '../../store/rootReducer' // Adjust the path as necessary to import RootState

const Courses = () => {
  const dispatch = useDispatch()

  // Retrieve courses from the Redux store
  const courses = useSelector((state: RootState) => state.courses)

  useEffect(() => {
    // Fetch courses from the backend on component mount and save them to the Redux store
    const fetchAndSaveCourses = async () => {
      try {
        const fetchedCourses = await fetchCoursesService()
        console.log(fetchedCourses)
        dispatch(saveCoursesAction(fetchedCourses.result))
      } catch (error) {
        console.error('Failed to fetch courses:', error)
      }
    }

    fetchAndSaveCourses()
  }, [dispatch])

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
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={8} key={course.id}>
            <CourseCard
              course={course}
              authors={course.authors.map((name) => ({ name }))}
              onDelete={() => handleDeleteCourse(course.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Courses
