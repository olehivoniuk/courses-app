import { Grid, TextField } from '@mui/material'
import React from 'react'

const CustomInput = ({ placeholder, variant, value, onChange }) => {
  return (
    <Grid>
      <TextField
        placeholder={placeholder}
        variant={variant}
        value={value}
        onChange={onChange}
      />
    </Grid>
  )
}

export default CustomInput
