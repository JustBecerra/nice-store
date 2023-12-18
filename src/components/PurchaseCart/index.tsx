"use client";
import { useAppSelector } from "@/redux/store";
import { Box } from "@mui/material";
import { theme } from "../../../utils/theme";
import { CartItem } from "../CartItem";
import { ProductType } from "@/redux/features/types";
import { useEffect, useState } from "react";

export const PurchaseCart = () => {
  const [filteredCart, setFilteredCart] = useState<ProductType[]>([]);

  const productCart = useAppSelector(
    (state) => state.productReducer.productCart
  );
  console.log({ productCart });
  console.log({ filteredCart });

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
        border: `1px solid ${theme.palette.background.default}`,
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
    </Box>
  );
};
