"use client";
import { Box } from "@mui/material";
import { NavBar } from "@/components/NavBar";
import { Product } from "@/components/Product";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/features/product-slice";

export default function Home() {
  const products = useAppSelector((state) => state.productReducer.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("products", products);
  return (
    <main>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100vw",
          gap: "2rem",
          marginTop: "1.5rem",
        }}
      >
        {products.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </Box>
    </main>
  );
}
