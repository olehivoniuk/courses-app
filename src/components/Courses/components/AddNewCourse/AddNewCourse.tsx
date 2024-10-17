import React from 'react'
import './AddNewCourse.scss'
import { Grid, TextField, Typography } from '@mui/material'
import CustomInput from 'src/common/Input/Input'
import CustomButton from 'src/common/Button/Button'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

const AddNewCourse = () => {
  return (
    <Grid
      display='flex'
      alignItems='center'
      justifyContent='start'
      flexDirection='column'
      gap={2}
    >
      <Grid
        display='flex'
        justifyContent='start'
        flexDirection='column'
        gap={2}
      >
        <Typography variant='h4'>Course Edit / Create Page</Typography>
        <Grid
          className='add-new-course-container'
          display='flex'
          flexDirection='column'
          gap={2}
        >
          <Typography variant='h6'>Main Info</Typography>
          <CustomInput label='title' />
          <TextField
            label='Description'
            multiline
            rows={4}
            placeholder='input text'
            variant='outlined'
          />
          <Grid
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            gap={2}
          >
            <Grid display='flex' flexDirection='column' gap={2}>
              <Typography variant='h6'>Duration</Typography>
              <Grid display='flex' gap={2} alignItems='center'>
                <CustomInput label='Duration' />
                <Typography variant='body1'>00:00</Typography>
              </Grid>
              <Typography variant='h6'>Authors</Typography>
              <Grid display='flex' gap={2}>
                <CustomInput label='Author name' />
                <CustomButton variant='contained'>Create author</CustomButton>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant='h6'>Course Authors</Typography>
              <Typography variant='body1'> Author list is empty</Typography>
            </Grid>
          </Grid>
          <Typography variant='h6'>Course Edit / Create Page</Typography>
          <Grid display='flex' alignItems='center'>
            <Typography variant='body1'>Author one + &nbsp;</Typography>
            <ShoppingBasketIcon />
          </Grid>
          <Grid display='flex' alignItems='center'>
            <Typography variant='body1'>Author two + &nbsp;</Typography>
            <ShoppingBasketIcon />
          </Grid>
        </Grid>
        <Grid
          display='flex'
          flexDirection='row'
          gap={2}
          justifyContent='flex-end'
        >
          <CustomButton variant='contained'>Cancel</CustomButton>
          <CustomButton variant='contained'>Create course</CustomButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AddNewCourse
