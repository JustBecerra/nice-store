"use client";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 1200,
      desktop: 1536,
    },
  },
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
