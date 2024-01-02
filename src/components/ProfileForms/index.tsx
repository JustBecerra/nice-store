import {
  Avatar,
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { theme } from "../../../utils/theme";
import { useState } from "react";
export const ProfileForms = () => {
  const { data: session } = useSession();
  const [update, setUpdate] = useState(session ? false : true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");

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
    const dataObject = { name, email, address };
    sessionStorage.setItem("userData", JSON.stringify(dataObject));
    setUpdate((prev) => !prev);
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
      <Box sx={{ position: "relative" }}>
        <Avatar
          src={session!.user?.image as string}
          sx={{ borderRadius: "0.75rem", height: "6rem", width: "6rem" }}
        />
        {update && (
          <Box
            sx={{
              position: "absolute",
              bottom: -15,
              right: 0,
            }}
          >
            <AddCircleIcon sx={{ height: "2.5rem", width: "2.5rem" }} />
          </Box>
        )}
      </Box>
      {!session || !update ? (
        <>
          <Typography>{name || session!.user?.name}</Typography>
          <Typography>{email || session!.user?.email}</Typography>
          <Typography>{address || "address"}</Typography>
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
            <TextField
              label="Full Name"
              sx={{ mt: "1rem" }}
              onChange={(e) => handleInputChange(e, setName)}
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
              label="Address"
              sx={{ mb: "1rem" }}
              onChange={(e) => handleInputChange(e, setaddress)}
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

        {!update ? (
          <Button
            sx={{
              backgroundColor: theme.palette.success.main,
              borderRadius: "0.75rem",
              px: "1rem",
              py: "0.75rem",
            }}
            onClick={() => setUpdate((prev) => !prev)}
          >
            <Typography
              sx={{ textTransform: "none", color: theme.palette.primary.light }}
            >
              Update
            </Typography>
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: theme.palette.success.main,
              borderRadius: "0.75rem",
              px: "1rem",
              py: "0.75rem",
            }}
            onClick={handleUpdate}
          >
            <Typography
              sx={{ textTransform: "none", color: theme.palette.primary.light }}
            >
              Confirm
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};
