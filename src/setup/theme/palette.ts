"use client";

import { PaletteColor,PaletteColorOptions } from "@mui/material";

export const palette = {
  neutral: {
    main: "#fff",
    contrastText: "#0C0C0C",
    dark: '#62666d',
  },
  primary: {
    main: "#FF6B6B",
    light: "#F6EAEB",
    dark: "#C41E3A",
  },
  secondary: {
    main: "#6B5B95",
    light: "#A999D9",
    dark: "#4B2E83",
  },
  error: {
    main: "#C91433",
    light: "#FAE7EB",
  },
  success: {
    main: "#146C43",
    light: "#D1F7E5",
  },
  black: {
    main: "#110506",
    light: "#D6D6D6",
    lighter: "#a1a3a8",
  },
};
declare module "@mui/material/styles" {
  interface Palette {
    neutral: PaletteColor;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    success: PaletteColor;
    black: PaletteColor;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    success?: PaletteColorOptions;
    black?: PaletteColorOptions;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    primary: true;
    secondary: true;
    error: true;
    success: true;
    black: true;
  }
}
