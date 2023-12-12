"use client";
import { useAppSelector } from "@/redux/store";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../utils/theme";

export const PurchaseCart = () => {
  const productCart = useAppSelector(
    (state) => state.productReducer.productCart
  );
  return (
    <Box>
      {productCart.map((product) => (
        <Box
          key={product.id}
          sx={{ borderColor: theme.palette.background.default }}
        >
          <Typography>{product.title}</Typography>
        </Box>
      ))}
    </Box>
  );
};
