"use client";
import { AppBar, Box, Toolbar } from "@mui/material";
import { theme } from "../../../utils/theme";
import { AuthenticationCard } from "@/components/AuthenticationCard";
import { BackArrow } from "@/components/BackArrow";

const Authentication = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: theme.palette.background.default,
            alignItems: "center",
            pl: 0,
          }}
        >
          <BackArrow />
        </Toolbar>
      </AppBar>
      <AuthenticationCard />
    </Box>
  );
};

export default Authentication;
