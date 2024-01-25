import { Box, Button, TextField, Typography } from "@mui/material";
import { theme } from "../../../utils/theme";
import { signIn } from "next-auth/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface LoginFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const LoginCard = () => {
  const { control, handleSubmit } = useForm<LoginFormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };
  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      const signInOptions = {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: "/",
      };
      await signIn("credentials", signInOptions);
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          }}
          render={({ field, fieldState }) => (
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
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
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
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true, min: 8 }}
          render={({ field, fieldState }) => (
            <TextField
              label="Password"
              type="password"
              sx={{
                width: { laptop: "50%" },
                "& .MuiInputLabel-root": {
                  color: theme.palette.primary.light,
                },
                "& .MuiInput-root": {
                  color: theme.palette.primary.light,
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: theme.palette.primary.light,
                  },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.light,
                },
                "& .MuiInputBase-input": {
                  color: theme.palette.primary.light,
                },
              }}
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
              {...field}
            />
          )}
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
        <Button
          sx={{
            width: { mobile: "65%", laptop: "35%" },
            border: `1px solid ${theme.palette.primary.light}`,
            borderRadius: "0.75rem",
            ml: "0 !important",
          }}
          onClick={handleGoogleSignIn}
        >
          <Typography
            sx={{
              textTransform: "none",
              color: theme.palette.primary.light,
            }}
          >
            Sign In with Google
          </Typography>
        </Button>
      </Box>
    </form>
  );
};
