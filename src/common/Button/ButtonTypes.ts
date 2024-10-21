export interface CustomButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'text' | 'outlined' | 'contained'
  type?: 'button' | 'submit' | 'reset'
}
