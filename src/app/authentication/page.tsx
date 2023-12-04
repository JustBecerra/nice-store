"use client";
import { Box } from "@mui/material";
import { theme } from "../../../utils/theme";
import { AuthenticationCard } from "@/components/AuthenticationCard";

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
      <AuthenticationCard />
    </Box>
  );
};

export default Authentication;
