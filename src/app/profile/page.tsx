"use client";
import { AppBar, Box, Toolbar } from "@mui/material";
import { theme } from "../../../utils/theme";
import { BackArrow } from "@/components/BackArrow";
import { ProfileForms } from "@/components/ProfileForms";
const Profile = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: theme.palette.background.default,
            pb: "0.5rem",
            pl: 0,
            alignItems: "center",
          }}
        >
          <BackArrow />
        </Toolbar>
      </AppBar>
      <ProfileForms />
    </Box>
  );
};

export default Profile;
