"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "../../../utils/theme";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { ProductType } from "@/redux/features/types";
import { addProducts, removeProduct } from "@/redux/features/product-slice";
import { useDispatch } from "react-redux";
export const CartItem = ({
  product,
  repeated,
}: {
  product: ProductType;
  repeated: number;
}) => {
  const dispatch = useDispatch();
  const { title, image, price } = product;
  const handleAdd = () => {
    dispatch(addProducts(product));
  };
  const handleSubtract = () => {
    dispatch(removeProduct(product.id));
  };
  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.background.default}`,
        pt: "0.5rem",
        mx: "0.5rem",
        mt: "0.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image src={image} width={100} height={100} alt="" />
        <Box sx={{ display: "flex" }}>
          <Button onClick={handleSubtract}>
            <RemoveIcon />
          </Button>
          <Typography>{repeated}</Typography>
          <Button onClick={handleAdd}>
            <AddIcon />
          </Button>
        </Box>
      </Box>

      <Typography>{title}</Typography>
      <Typography>{price}</Typography>
    </Box>
  );
};
