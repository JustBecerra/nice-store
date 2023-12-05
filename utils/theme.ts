"use client";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
export const theme = createTheme({
  palette: {
    primary: {
      main: "#5bc0de",
      light: "#ffff",
    },
    background: {
      default: "#101418",
    },
    success: {
      main: "#22bb33",
    },
    warning: {
      main: "#f0ad4e",
    },
    error: {
      main: "#bb2124",
    },
  },
});
