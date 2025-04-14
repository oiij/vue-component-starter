export interface ButtonProps {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
  size?: 'small' | 'default' | 'large'
  block?: boolean
  disabled?: boolean
  ghost?: boolean
  round?: boolean
  loading?: boolean
  color?: string
  textColor?: string
}
