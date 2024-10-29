import './Header.scss'
import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from './components/Logo/Logo'
import CustomButton from 'src/common/Button/Button'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const storedUsername = localStorage.getItem('username')
    setIsLoggedIn(!!token)
    setUsername(storedUsername || '')
  }, [location])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems='center'
      className='header'
    >
      <Logo />
      {isLoggedIn && (
        <Grid
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          gap={2}
        >
          <Typography>{username ? username : 'admin'}</Typography>
          <CustomButton variant='contained' onClick={handleLogout}>
            Logout
          </CustomButton>
        </Grid>
      )}
    </Grid>
  )
}

export default Header
