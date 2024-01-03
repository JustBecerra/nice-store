"use client";
import { useAppSelector } from "@/redux/store";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../../utils/theme";
import { CartItem } from "../CartItem";
import { ProductType } from "@/redux/features/types";
import { useEffect, useState } from "react";

export const PurchaseCart = () => {
  const [filteredCart, setFilteredCart] = useState<ProductType[]>([]);
  const productCart = useAppSelector(
    (state) => state.productReducer.productCart
  );
  const finalPrice = useAppSelector((state) => state.productReducer.finalPrice);

  useEffect(() => {
    const uniqueIds = new Set<number>();
    setFilteredCart(
      productCart.filter((obj) => {
        if (uniqueIds.has(obj.id)) {
          return false; // Duplicate found, skip this object
        }
        uniqueIds.add(obj.id);
        return true; // Unique object, include it in the result
      })
    );
  }, [productCart]);

  return (
    <Box
      sx={{
        // border: `1px solid ${theme.palette.background.default}`,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      {filteredCart.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          repeated={
            productCart.filter((elem) => elem.title === product.title).length
          }
        />
      ))}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          marginBottom: "0.5rem",
        }}
      >
        <Button sx={{ backgroundColor: `${theme.palette.success.main}` }}>
          <Typography sx={{ color: theme.palette.primary.light }}>
            Confirm Purchase
          </Typography>
        </Button>
        <Typography>Total Price: ${finalPrice}</Typography>
      </Box>
    </Box>
  );
};
