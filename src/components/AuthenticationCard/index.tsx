"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { theme } from "../../../utils/theme";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { LoginCard } from "../LoginCard";
import { RegisterCard } from "../RegisterCard";

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
        {name === "signin" ? <LoginCard /> : <RegisterCard />}
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
