import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import CustomButton from 'src/common/Button/Button'
import CustomInput from 'src/common/Input/Input'
import './Login.scss'
import { isValidEmail, isValidPassword } from 'src/helpers/isValidEmail'
import { useAppDispatch, useAppSelector } from 'src/hooks/useAppDispatch'
import { loginUser } from 'src/store/user/thunk'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [emailHelperText, setEmailHelperText] = useState('')
  const [passwordHelperText, setPasswordHelperText] = useState('')

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector((state) => state.user.isAuth)

  useEffect(() => {
    if (isAuth) {
      navigate('/courses')
    }
  }, [isAuth, navigate])

  const handleLoginSubmit = (event) => {
    event.preventDefault()

    if (!isValidEmail(email)) {
      setIsEmailValid(false)
      setEmailHelperText('Please enter a valid email address')
      return
    } else {
      setIsEmailValid(true)
      setEmailHelperText('')
    }

    if (!isValidPassword(password)) {
      setIsPasswordValid(false)
      setPasswordHelperText('Password is required, at least 8 symbols')
      return
    } else {
      setIsPasswordValid(true)
      setPasswordHelperText('')
    }

    dispatch(loginUser({ email, password }))
  }

  return (
    <Grid
      container
      display='flex'
      flexDirection='column'
      className='login-container'
      gap={4}
    >
      <Typography variant='h3'>Login</Typography>
      <form onSubmit={handleLoginSubmit}>
        <Grid
          item
          className='login-container-form'
          display='flex'
          flexDirection='column'
          gap={4}
        >
          <CustomInput
            label='Email'
            variant='outlined'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={!isEmailValid}
            helperText={emailHelperText}
          />
          <CustomInput
            label='Password'
            variant='outlined'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={!isPasswordValid}
            helperText={passwordHelperText}
          />
          <CustomButton type='submit' variant='contained'>
            Login
          </CustomButton>
          <Typography variant='body2'>
            Don't have an account? <Link to='/registration'>Register</Link>
          </Typography>
        </Grid>
      </form>
    </Grid>
  )
}

export default Login
