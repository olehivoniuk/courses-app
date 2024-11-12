import React from 'react'
import Button from '@mui/material/Button'
import './CustomButton.scss'
import { CustomButtonProps } from './CustomButtonTypes'

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className,
  variant,
  type,
}) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      variant={variant}
      type={type}
    >
      {children}
    </Button>
  )
}

export default CustomButton
