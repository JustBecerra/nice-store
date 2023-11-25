"use client";
import { NavBar } from "@/components/NavBar";
import { ProductsList } from "@/components/ProductsList";

export default function Home() {
  return (
    <main>
      <NavBar />
      <ProductsList />
    </main>
  );
}
