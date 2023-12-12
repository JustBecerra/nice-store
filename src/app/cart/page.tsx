"use client";
import { AppBar, Box, Toolbar } from "@mui/material";
import { theme } from "../../../utils/theme";
import { BackArrow } from "@/components/BackArrow";
import { PurchaseCart } from "@/components/PurchaseCart";

const Cart = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        gap: "0.5rem",
        overflow: "scroll",
        justifyContent: "space-between",
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: theme.palette.background.default,
            alignItems: "center",
            pl: 0,
          }}
        >
          <BackArrow />
        </Toolbar>
      </AppBar>
      <PurchaseCart />
    </Box>
  );
};

export default Cart;
