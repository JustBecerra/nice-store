import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Link from "next/link";
import { theme } from "../../../utils/theme";
import { useSession } from "next-auth/react";
export const NavBar = () => {
  const { data: session } = useSession();
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "row",
          gap: "1.25rem",
          justifyContent: "flex-end",
          width: "auto",
        }}
      >
        {session ? (
          <>
            <Link href={"profile"}>
              <AccountBoxIcon />
            </Link>
            <Link href={"cart"}>
              <ShoppingCartIcon />
            </Link>
          </>
        ) : (
          <>
            <Link
              href={{
                pathname: "/authentication",
                query: { name: "signin" },
              }}
            >
              <Button>
                <Typography
                  sx={{
                    textTransform: "none",
                    color: theme.palette.primary.light,
                  }}
                >
                  Sign In
                </Typography>
              </Button>
            </Link>
            <Link
              href={{
                pathname: "/authentication",
                query: { name: "signup" },
              }}
            >
              <Button>
                <Typography
                  sx={{
                    textTransform: "none",
                    color: theme.palette.primary.light,
                  }}
                >
                  Sign Up
                </Typography>
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
