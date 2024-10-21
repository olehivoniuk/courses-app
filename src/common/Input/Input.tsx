import { Grid, TextField } from '@mui/material'
import React from 'react'

type TextFieldVariant = 'filled' | 'outlined' | 'standard'

interface CustomInputProps {
  placeholder?: string
  variant?: TextFieldVariant
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  className?: string
  type?: string
  autoComplete?: string
  helperText?: string
  error?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  variant,
  value,
  onChange,
  label,
  className,
  type,
  autoComplete,
  error,
  helperText,
}) => {
  return (
    <Grid>
      <TextField
        placeholder={placeholder}
        variant={variant || 'outlined'}
        value={value}
        onChange={onChange}
        label={label}
        className={className}
        type={type}
        autoComplete={autoComplete}
        error={error}
        helperText={helperText}
        fullWidth
      />
    </Grid>
  )
}

export default CustomInput
