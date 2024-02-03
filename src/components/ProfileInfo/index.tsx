import { Box, Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { theme } from "../../../utils/theme";
import { useSession } from "next-auth/react";

interface props {
  handleLogOut: () => never;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}

export const ProfileInfo = ({ handleLogOut, setUpdate }: props) => {
  const { data: session } = useSession();
  return (
    <>
      <Typography>{session!.user?.name}</Typography>
      <Typography>{session!.user?.email}</Typography>
      <Typography>{session!.user?.address || "no address defined"}</Typography>
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
          onClick={() => setUpdate((prev) => !prev)}
        >
          Update
        </Button>
      </Box>
    </>
  );
};
