import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FormEvent } from "react";
import { theme } from "../../../utils/theme";
import { signIn } from "next-auth/react";

export const LoginCard = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      // Handle errors
      console.error("Error during registration:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          gap: "1.5rem",
        }}
      >
        <Typography
          sx={{
            textTransform: "none",
            color: theme.palette.primary.light,
            fontSize: "1.5rem",
          }}
        >
          Sign In to Nice Store
        </Typography>

        <TextField
          label="Email"
          name="email"
          sx={{
            width: { laptop: "50%" },
            "& .MuiInputLabel-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiInput-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "& .MuiInputBase-input": {
              color: theme.palette.primary.light,
            },
          }}
        />
        <TextField
          label="Password"
          name="password"
          sx={{
            width: { laptop: "50%" },
            "& .MuiInputLabel-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiInput-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "& .MuiInputBase-input": {
              color: theme.palette.primary.light,
            },
          }}
        />
        <Button
          sx={{
            width: { mobile: "65%", laptop: "35%" },
            border: `1px solid ${theme.palette.primary.light}`,
            borderRadius: "0.75rem",
            ml: "0 !important",
          }}
          type="submit"
        >
          <Typography
            sx={{ textTransform: "none", color: theme.palette.primary.light }}
          >
            Sign In
          </Typography>
        </Button>
      </Box>
    </form>
  );
};
