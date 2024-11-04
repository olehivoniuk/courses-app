import React, { useEffect } from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'
import CustomButton from 'src/common/Button/Button'
import { useParams, useNavigate } from 'react-router-dom'
import { formatDate } from 'src/helpers/formatCreationDate'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/rootReducer'
import { formatDuration } from 'src/helpers/getCourseDuration'
import { saveCourseAction } from 'src/store/courses/actions'
import { fetchCourseById } from 'src/services'

interface CourseInfoProps {
  onBack?: () => void
}

const CourseInfo: React.FC<CourseInfoProps> = ({ onBack }) => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const courses = useSelector((state: RootState) => state.courses)
  const authors = useSelector((state: RootState) => state.authors)

  const course = courses.find((c) => c.id === courseId)

  useEffect(() => {
    const fetchAndDispatchCourse = async () => {
      if (!course && courseId) {
        try {
          const fetchedCourse = await fetchCourseById(courseId)
          dispatch(saveCourseAction(fetchedCourse.result))
        } catch (error) {
          console.error('Failed to load course data:', error)
        }
      }
    }

    fetchAndDispatchCourse()
  }, [courseId, course, dispatch])

  const defaultBack = () => {
    navigate('/courses')
  }

  const handleBack = onBack || defaultBack

  if (!course) {
    return <div>Course not found</div>
  }

  const authorNames = course.authors
    .map((authorId) => authors.find((author) => author.id === authorId)?.name)
    .join(', ')

  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid container spacing={2} justifyContent='center' md={9} lg={8}>
        <Grid item xs={12} gap={4} display='flex' flexDirection='column'>
          <Typography variant='h4'>{course.title}</Typography>
          <Card className='course-card'>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={7}>
                  <Typography variant='body2' color='text.secondary'>
                    {course.description}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography variant='body2'>ID: {course.id}</Typography>
                  <Typography variant='body2'>
                    Authors: {authorNames}
                  </Typography>
                  <Typography variant='body2'>
                    Duration: {formatDuration(course.duration)}
                  </Typography>
                  <Typography variant='body2'>
                    Creation Date: {formatDate(course.creationDate)}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} container justifyContent='flex-end'>
          <CustomButton variant='contained' onClick={handleBack}>
            Back
          </CustomButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CourseInfo
