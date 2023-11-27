import { ProductType } from "@/redux/features/types";
import { Box, Button, Typography } from "@mui/material";
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
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        p: "0.5rem",
        gap: "0.5rem",
      }}
    >
      <Box sx={{ width: "100%", height: "45%", overflow: "hidden" }}>
        <Image
          src={image}
          width={400}
          height={300}
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
      <Typography
        sx={{ fontSize: "1.25rem", color: "white", marginRight: "1.5rem" }}
      >
        Price: ${price}
      </Typography>

      <Typography
        sx={{
          fontSize: "1rem",
          color: "white",
        }}
      >
        {description}.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button>
          <Typography
            sx={{
              fontSize: "1rem",
              color: "white",
            }}
          >
            Add to cart
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
