"use client";
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
import { useSearchParams } from "next/navigation";

export const AuthenticationCard = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

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
          {name === "signin"
            ? "Sign In to Nice Store"
            : "Sign Up to Nice Store"}
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
        {name === "signup" && (
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
            {name === "signin" ? "Sign In" : "Sign Up"}
          </Typography>
        </Button>
        <Link
          href={{
            pathname: "/authentication",
            query: { name: name === "signup" ? "signin" : "signup" },
          }}
        >
          <Typography
            sx={{
              textTransform: "none",
              color: theme.palette.primary.main,
              mt: "1rem",
              mb: "0.5rem",
            }}
          >
            {name === "signup"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign in"}
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
};
