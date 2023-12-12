"use client";
import { useAppSelector } from "@/redux/store";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../utils/theme";
import Image from "next/image";

export const PurchaseCart = () => {
  const productCart = useAppSelector(
    (state) => state.productReducer.productCart
  );
  return (
    <Box sx={{ border: `1px solid ${theme.palette.background.default}` }}>
      {productCart.map((product) => (
        <Box
          key={product.id}
          sx={{ borderTop: `1px solid ${theme.palette.background.default}` }}
        >
          <Image src={product.image} width={100} height={100} alt="" />
          <Typography>{product.title}</Typography>
          <Typography>{product.price}</Typography>
        </Box>
      ))}
    </Box>
  );
};
