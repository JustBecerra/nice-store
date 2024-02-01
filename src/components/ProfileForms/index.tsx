import {
  Avatar,
  Box,
  Button,
  FormControl,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { theme } from "../../../utils/theme";
import { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export const ProfileForms = () => {
  const { data: session } = useSession();
  const [selectedImage, setSelectedImage] = useState("");
  const [update, setUpdate] = useState(session ? false : true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
    redirect("/authentication");
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setInput: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setInput(event.target.value);
  };

  const handleUpdate = () => {
    const dataObject = { name, email, address, password, selectedImage };
    sessionStorage.setItem("userData", JSON.stringify(dataObject));
    setUpdate((prev) => !prev);
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        my: "auto",
      }}
    >
      <Avatar
        src={selectedImage ? selectedImage : (session!.user?.image as string)}
        sx={{ borderRadius: "0.75rem", height: "6rem", width: "6rem" }}
      />

      {!session || !update ? (
        <>
          <Typography>{name || session!.user?.name}</Typography>
          <Typography>{email || session!.user?.email}</Typography>
          <Typography>{address || "no address defined"}</Typography>
        </>
      ) : (
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
          <FormControl>
            {update && (
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
            )}
          </FormControl>
          <FormControl>
            <TextField
              label="Full Name"
              sx={{ mt: "1rem" }}
              onChange={(e) => handleInputChange(e, setName)}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Address"
              onChange={(e) => handleInputChange(e, setAddress)}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Email"
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Password"
              onChange={(e) => handleInputChange(e, setPassword)}
            />
          </FormControl>
        </Box>
      )}
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

        {!update ? (
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
            onClick={() => setUpdate((prev) => !prev)}
          >
            Update
          </Button>
        ) : (
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
            onClick={handleUpdate}
          >
            Confirm
          </Button>
        )}
      </Box>
    </Box>
  );
};
