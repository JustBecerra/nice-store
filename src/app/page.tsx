"use client";
import { NavBar } from "@/components/NavBar";
import { ProductsList } from "@/components/ProductsList";
import { useState } from "react";

export default function Home() {
  const [productName, setProductName] = useState("");
  return (
    <main>
      <NavBar setProductName={setProductName} />
      <ProductsList productName={productName} />
    </main>
  );
}
