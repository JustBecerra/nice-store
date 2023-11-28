import { AppBar, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Link from "next/link";
export const NavBar = () => {
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
        <Link href={"profile"}>
          <AccountBoxIcon />
        </Link>

        <ShoppingCartIcon />
      </Toolbar>
    </AppBar>
  );
};
