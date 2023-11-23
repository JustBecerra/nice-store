"use client";
import { ProductType } from "@/redux/features/types";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

interface props {
  item: ProductType;
}

export const Product = ({ item }: props) => {
  const { title, description, price, category, image, rating } = item;
  const theme = useTheme();
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
          width={200}
          height={200}
          layout="responsive"
          alt={""}
        />
      </Box>
      <Typography sx={{ fontSize: "1.5rem", color: "white" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "1.25rem", color: "white" }}>
        category: {category}
      </Typography>
      <Typography sx={{ fontSize: "1.25rem", color: "white" }}>
        ${price}
      </Typography>
      <Typography sx={{ fontSize: "1rem", color: "white" }}>
        {description}.
      </Typography>
    </Box>
  );
};
