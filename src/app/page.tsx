"use client";
import { NavBar } from "@/components/NavBar";
import { ProductsList } from "@/components/ProductsList";
import { Box } from "@mui/material";
import { useState } from "react";
import { theme } from "../../utils/theme";

export default function Home() {
  const [productName, setProductName] = useState("");
  return (
    <main>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: theme.palette.primary.light,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar setProductName={setProductName} />
        <ProductsList productName={productName} />
      </Box>
    </main>
  );
}
