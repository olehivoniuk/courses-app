import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import CustomButton from 'src/common/Button/Button'
import CustomInput from 'src/common/Input/Input'
import './Login.scss'
import { isValidEmail, isValidPassword } from 'src/helpers/isValidEmail'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from 'src/store/user/actions'
import { RootState } from 'src/store/rootReducer'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [emailHelperText, setEmailHelperText] = useState('')
  const [passwordHelperText, setPasswordHelperText] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Use useSelector to access isAuth from the Redux store
  const isAuth = useSelector((state: RootState) => state.user.isAuth)

  useEffect(() => {
    if (isAuth) {
      // If the user is already authenticated, redirect them
      navigate('/courses')
    }
    // Removed the localStorage check as isAuth check covers authentication state
  }, [isAuth, navigate])

  const url = 'http://localhost:4000/login'

  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    let isValid = true

    if (!isValidEmail(email)) {
      setIsEmailValid(false)
      setEmailHelperText('Please enter a valid email address')
      isValid = false
    } else {
      setIsEmailValid(true)
      setEmailHelperText('')
    }

    if (!isValidPassword(password)) {
      setIsPasswordValid(false)
      setPasswordHelperText('Password is required, at least 8 symbols')
      isValid = false
    } else {
      setIsPasswordValid(true)
      setPasswordHelperText('')
    }

    if (!isValid) return

    const userData = { email, password }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const data = await response.json()
      if (data.successful && data.result) {
        dispatch(loginSuccess(data.user.name, data.user.email, data.result))
        localStorage.setItem('token', data.result) // Keeping this for backward compatibility, remove if all auth is through Redux

        setEmail('')
        setPassword('')
        // No need for explicit navigation here; useEffect will handle it when isAuth changes
      } else {
        console.error('Login failed:', data)
      }
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  const onRegisterEmail = (event) => setEmail(event.target.value)

  const onRegisterPassword = (event) => setPassword(event.target.value)

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
            placeholder='Input text'
            variant='outlined'
            value={email}
            onChange={onRegisterEmail}
            label='Email'
            className={`email-input ${!isEmailValid ? 'input-error' : ''}`}
            autoComplete='new-email'
            error={!isEmailValid}
            helperText={emailHelperText}
          />
          <CustomInput
            placeholder='Input text'
            variant='outlined'
            value={password}
            onChange={onRegisterPassword}
            label='Password'
            type='password'
            className={`email-input ${!isPasswordValid ? 'input-error' : ''}`}
            autoComplete='new-password'
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
