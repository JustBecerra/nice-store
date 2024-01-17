import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../utils/theme";

export const LoginCard = () => {
  return (
    <>
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
        }}
      >
        <Typography
          sx={{ textTransform: "none", color: theme.palette.primary.light }}
        >
          Sign In
        </Typography>
      </Button>
    </>
  );
};
