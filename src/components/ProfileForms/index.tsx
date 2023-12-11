import { Avatar, Box, TextField } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ProfileActions } from "../ProfileActions";
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
      <ProfileActions />
    </Box>
  );
};
