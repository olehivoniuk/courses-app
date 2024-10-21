import { Grid, Typography } from '@mui/material'
import React from 'react'
import CustomButton from 'src/common/Button/Button'
import CustomInput from 'src/common/Input/Input'
import './Registration.scss'
import { Link } from 'react-router-dom'

const handleSubmit = () => {}

const Registration = () => {
  return (
    <Grid
      container
      display='flex'
      flexDirection='column'
      className='registration-container'
      gap={4}
    >
      <Typography variant='h3'>Registration</Typography>
      <form onSubmit={handleSubmit}>
        <Grid
          item
          className='registation-container-form'
          display='flex'
          flexDirection='column'
          gap={4}
        >
          <CustomInput
            placeholder='Input text'
            variant={undefined}
            value={undefined}
            onChange={undefined}
            label='Name'
            className='email-input'
          />
          <CustomInput
            placeholder='Input text'
            variant={undefined}
            value={undefined}
            onChange={undefined}
            label='Email'
            className='email-input'
          />
          <CustomInput
            placeholder='Input text'
            variant={undefined}
            value={undefined}
            onChange={undefined}
            label='Password'
            className='email-input'
          />
          <CustomButton variant='contained'>Registration</CustomButton>
          <Typography variant='body2'>
            If you have an account you may <Link to='/login'>Login</Link>
          </Typography>
        </Grid>
      </form>
    </Grid>
  )
}

export default Registration
