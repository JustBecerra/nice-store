import { AppBar, Box, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          justifyContent: "flex-end",
          width: "auto",
        }}
      >
        <AccountBoxIcon />
        <ShoppingCartIcon />
        {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                marginX: "0.5rem",
                gap: "0.25rem",
              }}
            >
              <LogoutIcon />
              <Typography>Log Out</Typography>
            </Box> */}
      </Toolbar>
    </AppBar>
  );
};
