import { Backdrop, Box, CircularProgress } from "@mui/material";
import { Product } from "../Product";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/redux/features/product-slice";
import { ProductType } from "@/redux/features/types";
import { theme } from "../../../utils/theme";

export const ProductsList = ({ productName }: { productName: string }) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [open, setOpen] = useState(false);
  const products = useAppSelector((state) => state.productReducer.products);
  const status = useAppSelector((state) => state.productReducer.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (status === "loading") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [status]);

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
      {open ? (
        <Backdrop
          sx={{
            color: theme.palette.primary.light,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        filteredProducts.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            id={item.id}
            image={item.image}
          />
        ))
      )}
    </Box>
  );
};
