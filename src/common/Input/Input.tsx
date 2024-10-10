import { Grid, TextField } from '@mui/material'
import React from 'react'

const CustomInput = ({ placeholder, variant }) => {
  return (
    <Grid>
      <TextField placeholder={placeholder} variant={variant} />
    </Grid>
  )
}

export default CustomInput
