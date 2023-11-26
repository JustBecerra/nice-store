import { Box } from "@mui/material";
import { Product } from "../Product";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/features/product-slice";

export const ProductsList = () => {
  const products = useAppSelector((state) => state.productReducer.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        gap: "2rem",
        marginY: "1.5rem",
      }}
    >
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Box>
  );
};
