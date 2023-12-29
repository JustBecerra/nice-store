import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { theme } from "../../../utils/theme";
export const ProfileForms = () => {
  const { data: session } = useSession();
  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
    redirect("/authentication");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        my: "auto",
      }}
      component="form"
    >
      <Box sx={{ position: "relative" }}>
        {session ? (
          <Avatar
            src={session.user?.image as string}
            sx={{ borderRadius: "0.75rem", height: "6rem", width: "6rem" }}
          />
        ) : (
          <Avatar sx={{ mt: "2rem", height: "6rem", width: "6rem" }}>
            <AccountBoxIcon sx={{ height: "2.5rem", width: "2.5rem" }} />
          </Avatar>
        )}
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
      {session ? (
        <>
          <Typography>{session.user?.name}</Typography>
          <Typography>{session.user?.email}</Typography>
          <Typography>address</Typography>
        </>
      ) : (
        <>
          <TextField label="Name" sx={{ mt: "1rem" }} />
          <TextField label="Email" />
          <TextField label="Address" sx={{ mb: "1rem" }} />
        </>
      )}
      <Box
        sx={{ display: "flex", width: "70%", justifyContent: "space-between" }}
      >
        {session && (
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
        )}
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
