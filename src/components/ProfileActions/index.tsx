import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../../utils/theme";

export const ProfileActions = () => {
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
