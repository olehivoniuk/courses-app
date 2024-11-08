import './Header.scss'
import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from './components/Logo/Logo'
import CustomButton from 'src/common/Button/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/rootReducer'
import { logout } from 'src/store/user/userSlice'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const username = useSelector((state: RootState) => state.user.name)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [location])

  const handleLogout = () => {
    dispatch(logout())
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
