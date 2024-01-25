"use client";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "../../../utils/theme";
import { useSearchParams } from "next/navigation";
import { LoginCard } from "../LoginCard";
import { RegisterCard } from "../RegisterCard";

export const AuthenticationCard = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: theme.palette.background.default,
        width: { mobile: "90%", laptop: "40%" },
        borderRadius: "0.75rem",
      }}
    >
      <CardContent>
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
