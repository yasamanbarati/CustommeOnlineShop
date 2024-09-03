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
<<<<<<< HEAD
  onClickFun?: () => void;
=======
  handleAddToCart?: () => void;
>>>>>>> 72dd1030886ff3add9966c4a080dcfed0b1717d2
}

const CustomizedButton = ({
  text,
  variant,
  startIcon,
  endIcon,
  size,
  sx,
  color,
<<<<<<< HEAD
  onClickFun,
=======
  handleAddToCart,
>>>>>>> 72dd1030886ff3add9966c4a080dcfed0b1717d2
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
<<<<<<< HEAD
      onClick={onClickFun}
=======
      onClick={handleAddToCart}
>>>>>>> 72dd1030886ff3add9966c4a080dcfed0b1717d2
      {...other}
    >
      {text}
    </Button>
  );
};
export default CustomizedButton;
