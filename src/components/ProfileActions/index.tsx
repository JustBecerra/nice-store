import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../../utils/theme";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
export const ProfileActions = () => {
  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
    redirect("/authentication");
  };
  return (
    <Box
      sx={{ display: "flex", width: "70%", justifyContent: "space-between" }}
    >
      <Button
        sx={{
          backgroundColor: theme.palette.error.main,
          borderRadius: "0.75rem",
          px: "1rem",
          py: "0.75rem",
        }}
        onClick={handleLogOut}
      >
        <Typography
          sx={{ textTransform: "none", color: theme.palette.primary.light }}
        >
          Log out
        </Typography>
      </Button>
      <Button
        sx={{
          backgroundColor: theme.palette.warning.main,
          borderRadius: "0.75rem",
          px: "1rem",
          py: "0.75rem",
        }}
      >
        <Typography
          sx={{ textTransform: "none", color: theme.palette.primary.light }}
        >
          Clear
        </Typography>
      </Button>
      <Button
        sx={{
          backgroundColor: theme.palette.success.main,
          borderRadius: "0.75rem",
          px: "1rem",
          py: "0.75rem",
        }}
      >
        <Typography
          sx={{ textTransform: "none", color: theme.palette.primary.light }}
        >
          Update
        </Typography>
      </Button>
    </Box>
  );
};
