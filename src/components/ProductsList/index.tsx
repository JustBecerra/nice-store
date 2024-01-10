import { Box } from "@mui/material";
import { Product } from "../Product";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/redux/features/product-slice";
import { ProductType } from "@/redux/features/types";

export const ProductsList = ({ productName }: { productName: string }) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const products = useAppSelector((state) => state.productReducer.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(productName.toLowerCase())
      )
    );
  }, [productName, products]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { mobile: "center", laptop: "space-around" },
        alignItems: "center",
        flexDirection: {
          mobile: "column",
          laptop: "row",
        },
        flexWrap: { laptop: "wrap" },
        width: "100vw",
        gap: "2rem",
        mt: "5rem",
        mb: "1.5rem",
      }}
    >
      {filteredProducts.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          id={item.id}
          image={item.image}
        />
      ))}
    </Box>
  );
};
