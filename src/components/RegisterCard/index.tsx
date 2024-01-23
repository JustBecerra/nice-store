import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { theme } from "../../../utils/theme";
import axios from "axios";

export const RegisterCard = () => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormEmpty, setIsFormEmpty] = useState(true);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      await axios.post("api/auth/register", {
        email: formData.get("email"),
        fullname: formData.get("fullname"),
        password: formData.get("password"),
        redirect: true,
        callbackUrl: "/authentication?name=signin",
      });
    } catch (error) {
      // Handle errors
      console.error("Error during registration:", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
    const fieldsAreEmpty = Object.values({
      ...registerForm,
      [name]: value,
    }).every((val) => val === "");
    setIsFormEmpty(fieldsAreEmpty);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
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
          Sign Up to Nice Store
        </Typography>

        <TextField
          label="Email"
          name="email"
          onChange={handleChange}
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
          label="Full Name"
          name="fullname"
          onChange={handleChange}
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
            "& .MuiFilledInput": {
              color: theme.palette.primary.light,
            },
            "& .MuiInputBase-input": {
              color: theme.palette.primary.light,
            },
          }}
        />
        <TextField
          label="Password"
          name="password"
          onChange={handleChange}
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
          label="Confirm Password"
          onChange={handleChange}
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
            "& .MuiFilledInput": {
              color: theme.palette.primary.light,
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
            textTransform: "none",
            color: theme.palette.primary.light,
          }}
          disabled={isFormEmpty}
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </form>
  );
};
