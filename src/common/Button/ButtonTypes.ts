export interface CustomButtonProps {
  children?: React.ReactNode
  onClick?: (
    event?: React.MouseEvent<HTMLButtonElement>,
  ) => void | Promise<void>
  className?: string
  variant?: 'text' | 'outlined' | 'contained'
  type?: 'button' | 'submit' | 'reset'
}
