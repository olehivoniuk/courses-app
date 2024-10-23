import { Card, CardContent, Grid, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import React from 'react'
import CustomButton from 'src/common/Button/Button'
import { formatDuration } from 'src/helpers/getCourseDuration'
import './CourseCard.scss'
import { Link } from 'react-router-dom'
import { formatDate } from 'src/helpers/formatCreationDate'

const CourseCard = ({ course, authors, onDelete }) => {
  return (
    <Card className='course-card'>
      <CardContent>
        <Typography variant='h5' component='div'>
          {course.title}
        </Typography>
        <Grid display='flex' gap={4}>
          <Grid item xs={7}>
            <Typography variant='body2' color='text.secondary'>
              {course.description}
            </Typography>
          </Grid>
          <Grid item xs={5} display='flex' flexDirection='column' gap={3}>
            <Grid>
              <Grid display='flex' flexDirection='row' gap={2}>
                <Typography fontWeight='bold' variant='body2'>
                  Authors:
                </Typography>
                <Grid display='flex' flexDirection='column'>
                  <Typography variant='body2' className='course-authors'>
                    {authors?.length > 0
                      ? authors.map((author) => author.name).join(', ')
                      : 'No authors'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid display='flex' flexDirection='row' gap={2}>
                <Typography fontWeight='bold' variant='body2'>
                  Duration:
                </Typography>
                <Grid display='flex' flexDirection='column'>
                  <Typography variant='body2' className='course-authors'>
                    {formatDuration(course.duration)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid display='flex' flexDirection='row' gap={2}>
                <Typography fontWeight='bold' variant='body2'>
                  Creation:
                </Typography>
                <Grid display='flex' flexDirection='column'>
                  <Typography variant='body2' className='course-authors'>
                    {formatDate(course.id)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Grid display='flex' flexDirection='row' gap={2}>
                <CustomButton variant='contained'>
                  <Link to={`/courses/${course.id}`}>SHOW COURSE</Link>
                </CustomButton>
                <CustomButton onClick={onDelete} variant='contained'>
                  <DeleteIcon />
                </CustomButton>
                <CustomButton
                  onClick={() => console.log('Edit course', course.id)}
                  variant='contained'
                >
                  <EditIcon />
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CourseCard
