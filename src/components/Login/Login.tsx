import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import CustomButton from 'src/common/Button/Button'
import CustomInput from 'src/common/Input/Input'
import './Login.scss'

const handleSubmit = () => {}

const Login = () => {
  return (
    <Grid
      container
      display='flex'
      flexDirection='column'
      className='login-container'
      gap={4}
    >
      <Typography variant='h3'>Login</Typography>
      <form onSubmit={handleSubmit}>
        <Grid
          item
          className='login-container-form'
          display='flex'
          flexDirection='column'
          gap={4}
        >
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
          <CustomButton variant='contained'>Login</CustomButton>
          <Typography variant='body2'>
            If you have an account you may{' '}
            <Link to='/registration'>Register</Link>
          </Typography>
        </Grid>
      </form>
    </Grid>
  )
}

export default Login
