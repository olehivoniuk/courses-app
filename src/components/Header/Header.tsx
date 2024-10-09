import './Header.scss'
import { Grid } from '@mui/material'
import React from 'react'
import Logo from './components/Logo/Logo'
import CustomButton from 'src/common/Button/Button'

const Header = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Logo />
      <CustomButton
        buttonText='Logout'
        variant='contained'
        onClick={undefined}
        className='logout-button'
      />
    </Grid>
  )
}

export default Header
