import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { theme } from "../../../utils/theme";
import { useState } from "react";

export const AuthenticationCard = () => {
  const [registerStatus, setRegisterStatus] = useState(false);

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: theme.palette.background.default,
        width: "90%",
        borderRadius: "0.75rem",
      }}
    >
      <CardContent
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
          {registerStatus ? "Sign Up to Nice Store" : "Sign In to Nice Store"}
        </Typography>

        <TextField
          label="Email"
          sx={{
            "& .MuiInputLabel-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiInput-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
          }}
        />
        <TextField
          label="Password"
          sx={{
            "& .MuiInputLabel-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiInput-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
          }}
        />
        {registerStatus && (
          <TextField
            label="Confirm Password"
            sx={{
              "& .MuiInputLabel-root": {
                color: theme.palette.primary.light,
              },
              "& .MuiInput-root": {
                color: theme.palette.primary.light,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.light,
              },
              "& .MuiFilledInput": {
                color: theme.palette.primary.light,
              },
            }}
          />
        )}
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={{
            width: "65%",
            border: `1px solid ${theme.palette.primary.light}`,
            borderRadius: "0.75rem",
          }}
        >
          <Typography
            sx={{ textTransform: "none", color: theme.palette.primary.light }}
          >
            {registerStatus ? "Sign Up" : "Sign In"}
          </Typography>
        </Button>
        <Link
          href={{
            pathname: "/authentication",
            query: { name: registerStatus ? "signup" : "signin" },
          }}
          onClick={() => setRegisterStatus((prev) => !prev)}
        >
          <Typography
            sx={{
              textTransform: "none",
              color: theme.palette.primary.main,
              mt: "1rem",
              mb: "0.5rem",
            }}
          >
            {registerStatus
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
};
