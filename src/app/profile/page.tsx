"use client";
import { Box } from "@mui/material";
import { theme } from "../../../utils/theme";
import { BackArrow } from "@/components/BackArrow";
import { ProfileForms } from "@/components/ProfileForms";
const Profile = () => {
  return (
    <Box sx={{ height: "100vh", backgroundColor: theme.palette.primary.light }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: theme.palette.primary.main,
          pb: "0.5rem",
          alignItems: "center",
        }}
      >
        <BackArrow />
      </Box>
      <ProfileForms />
    </Box>
  );
};

export default Profile;
