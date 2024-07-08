"use client";
import { Button, SxProps } from "@mui/material";

interface Props  {
  text?: string;
  variant: "outlined" | "contained" | "text";
  size: "large" | "medium" | "small";
  sx?: SxProps;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  color?: string;
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
      color={color ?? "primary"}
      size={size}
      disableElevation
      sx={sx}
      startIcon={startIcon}
      {...other}
    >
      {text}
    </Button>
  );
};
export default CustomizedButton;
