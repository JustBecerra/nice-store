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
        display: "flex",
        flexDirection: { mobile: "column", laptop: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { mobile: "space-around", laptop: "unset" },
          flexDirection: { mobile: "row", laptop: "column-reverse" },
          marginBottom: "0.5rem",
          gap: "1rem",
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
