import { Grid, Typography } from '@mui/material'
import React from 'react'
import CustomButton from 'src/common/Button/Button'

const EmptyCourseList = () => {
  return (
    <Grid
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      gap={3}
    >
      <Typography variant='subtitle1'>Your list is empty</Typography>
      <Typography variant='body1'>
        Please use ’Add New Course’ button to add your first course
      </Typography>
      <CustomButton variant='contained'>Add new course</CustomButton>
    </Grid>
  )
}

export default EmptyCourseList
