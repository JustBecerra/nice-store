import { Box, Button, Input, TextField } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { theme } from "../../../utils/theme";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSession } from "next-auth/react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
interface props {
  handleLogOut: () => never;
  setSelectedImage: Dispatch<SetStateAction<string>>;
}

interface IFormInput {
  Email: string;
  Fullname: string;
  Address: string;
  Password: string;
}

const schema = yup.object().shape({
  Email: yup.string().email("Invalid email").required("Email is required"),
  Fullname: yup.string().required("Full Name is required"),
  Address: yup.string().required("an address is required"),
  Password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const ProfileInputs = ({ handleLogOut, setSelectedImage }: props) => {
  const { data: session, update: sessionUpdate } = useSession();
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      Email: "",
      Fullname: "",
      Address: "",
      Password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    sessionUpdate({
      name: control._defaultValues.Fullname,
      Email: control._defaultValues.Email,
      Password: control._defaultValues.Password,
      Address: control._defaultValues.Address,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* <Controller
              name="profilepic"
              control={control}
              render={() => */}

        <Button
          component="label"
          variant="contained"
          startIcon={<FileUploadIcon />}
          sx={{ textTransform: "none" }}
        >
          Change photo
          <Input
            sx={{
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: 1,
              overflow: "hidden",
              position: "absolute",
              bottom: 0,
              left: 0,
              whiteSpace: "nowrap",
              width: 1,
            }}
            type="file"
            onChange={handleImageChange}
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              e.stopPropagation()
            }
          />
        </Button>
        {/* /> */}
        <Controller
          name="Fullname"
          control={control}
          rules={{ required: true, pattern: /^[A-Za-z]+$/i }}
          render={() => <TextField label="Full Name" sx={{ mt: "1rem" }} />}
        />
        <Controller
          name="Address"
          control={control}
          rules={{ required: true, pattern: /^[A-Za-z]+$/i }}
          render={() => <TextField label="Address" />}
        />
        <Controller
          name="Email"
          control={control}
          rules={{
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          }}
          render={() => <TextField label="Email" />}
        />
        <Controller
          name="Password"
          control={control}
          rules={{ required: true, min: 8 }}
          render={() => <TextField label="Password" />}
        />

        <Box
          sx={{
            display: "flex",
            width: "70%",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          <Button
            sx={{
              backgroundColor: theme.palette.error.main,
              borderRadius: "0.75rem",
              border: `1px solid ${theme.palette.background.default}`,
              px: "1rem",
              py: "0.75rem",
              color: theme.palette.primary.light,
              textTransform: "none",
              "&:hover": {
                color: theme.palette.background.default,
              },
            }}
            onClick={handleLogOut}
          >
            Log out
          </Button>

          <Button
            sx={{
              backgroundColor: theme.palette.success.main,
              borderRadius: "0.75rem",
              px: "1rem",
              py: "0.75rem",
              border: `1px solid ${theme.palette.primary.dark}`,
              color: theme.palette.primary.light,
              textTransform: "none",
              "&:hover": {
                color: theme.palette.background.default,
              },
            }}
            type="submit"
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </form>
  );
};
