import { Grid } from '@mui/material'
import React from 'react'
import CustomButton from 'src/common/Button/Button'
import CustomInput from 'src/common/Input/Input'

const SearchBar = () => {
  return (
    <Grid display='flex' gap={2}>
      <CustomInput placeholder='Input text' variant='outlined' />
      <CustomButton variant='contained'> Search</CustomButton>
    </Grid>
  )
}

export default SearchBar
