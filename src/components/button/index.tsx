"use client";
import { Button, SxProps } from "@mui/material";

interface Props {
  text?: string;
  variant: "outlined" | "contained" | "text";
  size: "large" | "medium" | "small";
  sx?: SxProps;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  color?: string;
  handleAddToCart?: () => void;
}

const CustomizedButton = ({
  text,
  variant,
  startIcon,
  endIcon,
  size,
  sx,
  color,
  handleAddToCart,
  ...other
}: Props) => {
  return (
    <Button
      variant={variant}
      color={color ?? "primary"}
      size={size}
      disableElevation
      sx={sx}
      startIcon={startIcon}
      onClick={handleAddToCart}
      {...other}
    >
      {text}
    </Button>
  );
};
export default CustomizedButton;
