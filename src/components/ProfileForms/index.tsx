import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { theme } from "../../../utils/theme";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
export const ProfileForms = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
      component="form"
    >
      <Box sx={{ position: "relative" }}>
        <Avatar sx={{ mt: "2rem", height: "6rem", width: "6rem" }}>
          <AccountBoxIcon sx={{ height: "3rem", width: "3rem" }} />
        </Avatar>
        <Box
          sx={{
            position: "absolute",
            bottom: -15,
            right: 0,
          }}
        >
          <AddCircleIcon sx={{ height: "3rem", width: "3rem" }} />
        </Box>
      </Box>

      <TextField label="First name" sx={{ mt: "1rem" }} />
      <TextField label="Last name" />
      <TextField label="Username" />
      <TextField label="Email" />
      <TextField label="Address" sx={{ mb: "1rem" }} />
      <Box
        sx={{ display: "flex", width: "50%", justifyContent: "space-between" }}
      >
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
    </Box>
  );
};
