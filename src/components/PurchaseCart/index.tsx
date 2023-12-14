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
  let titles: string[] = [];
  useEffect(() => {
    productCart.forEach((element) => {
      if (!titles.includes(element.title)) {
        titles.push(element.title);
        setFilteredCart([...filteredCart, element]);
      }
    });
  }, []);

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
