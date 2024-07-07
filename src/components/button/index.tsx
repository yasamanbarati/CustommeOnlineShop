'use client'
import { Button, ButtonProps, SxProps } from '@mui/material'


interface Props extends ButtonProps {
  text?: string
  variant: 'outlined' | 'contained' | 'text'
  size: 'large' | 'medium' | 'small'
  sx?: SxProps
}

const CustomizedButton = ({
  text,
  variant,
  startIcon,
  endIcon,
  size,
  sx,
  color,
  ...other
}: Props) => {
  return (
    <Button
      variant={variant}
      color={color ?? 'primary'}
      size={size}
      disableElevation
      sx={sx}
      startIcon={startIcon}
      {...other}
    >
      {text}
    </Button>
  )
}
export default CustomizedButton