import React from 'react'
import Button from '@mui/material/Button'
import './Button.scss'

const CustomButton = ({ buttonText, onClick, className, variant }) => {
  return (
    <Button onClick={onClick} className={className} variant={variant}>
      {buttonText}
    </Button>
  )
}

export default CustomButton
