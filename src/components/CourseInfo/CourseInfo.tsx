import React from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'
import CustomButton from 'src/common/Button/Button'
import { formatDuration } from 'src/helpers/getCourseDuration'
import { mockedAuthorsList } from 'src/constants'

const CourseInfo = ({ course, onBack }) => {
  if (!course) return null

  const authors = course.authors
    .map(
      (authorId) =>
        mockedAuthorsList.find((author) => author.id === authorId)?.name,
    )
    .filter((name) => name)
    .join(', ')

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card className='course-card'>
          <CardContent>
            <Typography variant='h5' component='div'>
              {course.title}
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={7}>
                <Typography variant='body2' color='text.secondary'>
                  {course.description}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='body2'>ID: {course.id}</Typography>
                <Typography variant='body2'>Authors: {authors}</Typography>
                <Typography variant='body2'>
                  Duration: {formatDuration(course.duration)}
                </Typography>
                <Typography variant='body2'>
                  Creation Date: {course.creationDate}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} container justifyContent='flex-end'>
        <CustomButton variant='contained' onClick={onBack}>
          Back
        </CustomButton>
      </Grid>
    </Grid>
  )
}

export default CourseInfo
