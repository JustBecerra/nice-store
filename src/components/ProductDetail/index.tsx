import { ProductType } from "@/redux/features/types";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { theme } from "../../../utils/theme";
interface props {
  item: ProductType;
}
export const ProductDetail = ({ item }: props) => {
  const { title, price, image, description, category } = item;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "75%",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0.75rem",
        p: "0.5rem",
        gap: "0.5rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "30%",
        }}
      >
        <Image
          src={image}
          width={100}
          height={100}
          layout="responsive"
          alt={""}
        />
      </Box>
      <Typography sx={{ fontSize: "1.5rem", color: "white" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "1.25rem", color: "white" }}>
        Category: {category}
      </Typography>
      <Typography sx={{ fontSize: "1.25rem", color: "white" }}>
        ${price}
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          color: "white",
          maxHeight: "4.75em",
        }}
      >
        {description}.
      </Typography>
    </Box>
  );
};
