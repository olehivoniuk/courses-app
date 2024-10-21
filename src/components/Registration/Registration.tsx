import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from 'src/common/Button/Button'
import CustomInput from 'src/common/Input/Input'
import './Registration.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { isValidEmail, isValidPassword } from 'src/helpers/isValidEmail'

const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isNameValid, setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [nameHelperText, setNameHelperText] = useState('')
  const [emailHelperText, setEmailHelperText] = useState('')
  const [passwordHelperText, setPasswordHelperText] = useState('')

  const navigate = useNavigate()
  const url = 'http://localhost:4000/register'

  const onHandleRegisterSubmit = async (event) => {
    event.preventDefault()
    let isValid = true

    if (!name.trim()) {
      setIsNameValid(false)
      setNameHelperText('Name is required')
      isValid = false
    } else {
      setIsNameValid(true)
      setNameHelperText('')
    }

    if (!isValidEmail(email)) {
      setIsEmailValid(false)
      setEmailHelperText('Email is required')
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

    const userData = {
      name,
      email,
      password,
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      setName('')
      setEmail('')
      setPassword('')
      navigate('/login')

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Failed to register:', error)
    }
  }

  const onRegisterName = (event) => {
    setName(event.target.value)
  }

  const onRegisterEmail = (event) => {
    setEmail(event.target.value)
  }

  const onRegisterPassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <Grid
      container
      display='flex'
      flexDirection='column'
      className='registration-container'
      gap={4}
    >
      <Typography variant='h3'>Registration</Typography>
      <form onSubmit={onHandleRegisterSubmit}>
        <Grid
          item
          className='registation-container-form'
          display='flex'
          flexDirection='column'
          gap={4}
        >
          <CustomInput
            placeholder='Input text'
            variant='outlined'
            value={name}
            onChange={onRegisterName}
            label='Name'
            className={`email-input ${!isNameValid ? 'input-error' : ''}`}
            autoComplete='new-userName'
            error={!isNameValid}
            helperText={nameHelperText}
          />
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
            Registration
          </CustomButton>
          <Typography variant='body2'>
            If you have an account you may <Link to='/login'>Login</Link>
          </Typography>
        </Grid>
      </form>
    </Grid>
  )
}

export default Registration
