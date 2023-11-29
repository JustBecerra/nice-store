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
      main: "#101418",
      light: "#ffff",
    },
    success: {
      main: "#22bb33",
    },
    warning: {
      main: "#f0ad4e",
    },
  },
});
