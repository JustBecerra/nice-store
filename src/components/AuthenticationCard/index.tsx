"use client";
import {
  Box,
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
import { signIn } from "next-auth/react";

export const AuthenticationCard = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: theme.palette.background.default,
        width: { mobile: "90%", laptop: "40%" },
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
        {name === "signup" && (
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
          />
        )}
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
        {name === "signup" && (
          <TextField
            label="Confirm Password"
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
          />
        )}
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: { mobile: "column", laptop: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
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
              {name === "signin" ? "Sign In" : "Sign Up"}
            </Typography>
          </Button>
          {name === "signin" && (
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
          )}
        </Box>
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
              mb: "0.5rem",
            }}
          >
            {name === "signup"
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
};
