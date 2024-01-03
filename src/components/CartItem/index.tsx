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
        border: `2.5px solid ${theme.palette.background.default}`,
        borderRadius: "0.75rem",
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
          marginLeft: "1rem",
        }}
      >
        <Image src={image} width={100} height={100} alt="" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginRight: "0.5rem",
          }}
        >
          <Button
            sx={{
              border: `1px solid ${theme.palette.error.main}`,
              p: "0",
            }}
            onClick={handleSubtract}
          >
            <RemoveIcon sx={{ color: theme.palette.error.main }} />
          </Button>
          <Typography>{repeated}</Typography>
          <Button
            sx={{
              border: `1px solid ${theme.palette.success.main}`,
              p: "0",
            }}
            onClick={handleAdd}
          >
            <AddIcon sx={{ color: theme.palette.success.main }} />
          </Button>
        </Box>
      </Box>

      <Typography sx={{ marginLeft: "1rem" }}>{title}</Typography>
      <Typography sx={{ marginLeft: "1rem" }}>{price}</Typography>
    </Box>
  );
};
