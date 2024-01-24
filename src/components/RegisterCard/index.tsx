import { Box, Button, TextField, Typography } from "@mui/material";
import { theme } from "../../../utils/theme";
import axios from "axios";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface IFormInput {
  email: string;
  fullname: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  fullname: yup.string().required("Full Name is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const RegisterCard = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData(e.currentTarget);
  //     await axios.post("api/auth/register", {
  //       email: formData.get("email"),
  //       fullname: formData.get("fullname"),
  //       password: formData.get("password"),
  //       redirect: true,
  //       callbackUrl: "/authentication?name=signin",
  //     });
  //   } catch (error) {
  //     console.error("Error during registration:", error);
  //   }
  // };
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("fullname", data.fullname);
      formData.append("password", data.password);
      formData.append("redirect", "true");
      formData.append("callbackUrl", "/authentication?name=signin");

      await axios.post("api/auth/register", formData);
    } catch (error) {
      console.error("Error during registration:", error);
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
          name="fullname"
          control={control}
          rules={{ required: true, pattern: /^[A-Za-z]+$/i }}
          render={({ field, fieldState }) => (
            <TextField
              label="Full Name"
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
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true, min: 8 }}
          render={({ field, fieldState }) => (
            <TextField
              label="Confirm Password"
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
            textTransform: "none",
            color: theme.palette.primary.light,
          }}
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </form>
  );
};
