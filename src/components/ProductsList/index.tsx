import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { Product } from "../Product";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/redux/features/product/product-slice";
import { ProductType } from "@/redux/features/types";
import { theme } from "../../../utils/theme";
import StorefrontIcon from "@mui/icons-material/Storefront";
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
        height: "100vh",
        gap: "2rem",
        mt: "5rem",
        mb: "1.5rem",
      }}
    >
      {open && (
        <Backdrop
          sx={{
            color: theme.palette.primary.light,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}{" "}
      {filteredProducts.length > 0
        ? filteredProducts.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              price={item.price}
              id={item.id}
              image={item.image}
            />
          ))
        : productName.length > 0 && (
            <Box
              sx={{
                m: "auto",
                width: { mobile: "60%", laptop: "20%" },
                p: "1rem",
                backgroundColor: theme.palette.background.default,
                borderRadius: "0.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <Typography
                sx={{ color: theme.palette.primary.light, textAlign: "center" }}
              >
                Looks like we don&apos;t have that! <br />
                try entering something else.
              </Typography>
              <StorefrontIcon sx={{ color: theme.palette.primary.light }} />
            </Box>
          )}
    </Box>
  );
};
