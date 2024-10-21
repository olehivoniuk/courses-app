import React from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'
import CustomButton from 'src/common/Button/Button'
import { formatDuration } from 'src/helpers/getCourseDuration'
import { mockedAuthorsList, mockedCoursesList } from 'src/constants'
import { useParams, useNavigate } from 'react-router-dom'

interface CourseInfoProps {
  course?: {
    title: string
    description: string
    id: string
    authors: string[]
    duration: number
    creationDate: string
  }
  onBack?: () => void
}

const CourseInfo: React.FC<CourseInfoProps> = ({ course, onBack }) => {
  const params = useParams()
  const navigate = useNavigate()
  const courseFromParams = mockedCoursesList.find(
    (c) => c.id === params.courseId,
  )
  const finalCourse = course || courseFromParams

  if (!finalCourse) return <Typography>No course found.</Typography>

  const authors = finalCourse.authors
    .map(
      (authorId) =>
        mockedAuthorsList.find((author) => author.id === authorId)?.name,
    )
    .filter((name) => name)
    .join(', ')

  const defaultBack = () => {
    navigate(-1)
  }

  const handleBack = onBack || defaultBack

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card className='course-card'>
          <CardContent>
            <h2>Course id that came from URL is {params.courseId}</h2>
            <Typography variant='h5' component='div'>
              {finalCourse.title}
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={7}>
                <Typography variant='body2' color='text.secondary'>
                  {finalCourse.description}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='body2'>ID: {finalCourse.id}</Typography>
                <Typography variant='body2'>Authors: {authors}</Typography>
                <Typography variant='body2'>
                  Duration: {formatDuration(finalCourse.duration)}
                </Typography>
                <Typography variant='body2'>
                  Creation Date: {finalCourse.creationDate}
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
  )
}

export default CourseInfo
