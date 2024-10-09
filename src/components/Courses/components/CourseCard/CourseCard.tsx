import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const CourseCard = ({ course, authors }) => {
  return (
    <Card className='course-card'>
      <CardContent>
        <Typography variant='h5' component='div'>
          {course.title}
        </Typography>
        <Grid display='flex' gap={4}>
          <Grid xs={9}>
            <Typography variant='body2' color='text.secondary'>
              {course.description}{' '}
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant='body2'>
              Authors: {authors.map((author) => author.name).join(', ')}{' '}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CourseCard
