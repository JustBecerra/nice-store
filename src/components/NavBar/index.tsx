import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Link from "next/link";
import { theme } from "../../../utils/theme";
export const NavBar = () => {
  const signedIn = false;
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1.25rem",
          justifyContent: "flex-end",
          width: "auto",
        }}
      >
        {signedIn ? (
          <>
            <Link href={"profile"}>
              <AccountBoxIcon />
            </Link>
            <ShoppingCartIcon />
          </>
        ) : (
          <>
            <Button>
              <Typography
                sx={{
                  textTransform: "none",
                  color: theme.palette.primary.light,
                }}
              >
                Log In
              </Typography>
            </Button>
            <Link href={"authentication"}>
              <Button>
                <Typography
                  sx={{
                    textTransform: "none",
                    color: theme.palette.primary.light,
                  }}
                >
                  Register
                </Typography>
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
