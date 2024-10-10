import React from 'react'
import Button from '@mui/material/Button'
import './Button.scss'
import { CustomButtonProps } from './ButtonTypes'

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className,
  variant,
}) => {
  return (
    <Button onClick={onClick} className={className} variant={variant}>
      {children}
    </Button>
  )
}

export default CustomButton
