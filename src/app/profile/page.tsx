"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { theme } from "../../../utils/theme";
import { BackArrow } from "@/components/BackArrow";
const Profile = () => {
  const router = useRouter();
  return (
    <Box>
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
    </Box>
  );
};

export default Profile;
