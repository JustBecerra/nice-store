import {
  AppBar,
  Avatar,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { theme } from "../../../utils/theme";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";
export const NavBar = ({
  setProductName,
}: {
  setProductName: Dispatch<SetStateAction<string>>;
}) => {
  const { data: session } = useSession();
  // const image = sessionStorage.getItem("selectedImage");
  return (
    <AppBar>
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
        <TextField
          label="Search"
          size="small"
          onChange={(e) => setProductName(e.target.value)}
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
        {session ? (
          <>
            <Link href={"cart"}>
              <ShoppingCartIcon
                sx={{
                  color: theme.palette.primary.light,
                }}
              />
            </Link>
            <Link href={"profile"}>
              <Avatar
                src={session!.user?.image as string}
                sx={{ borderRadius: "0.75rem", height: "2rem", width: "2rem" }}
              />
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
