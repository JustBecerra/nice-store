"use client";
import { ProductType } from "@/redux/features/types";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { theme } from "../../../utils/theme";
import { BackArrow } from "../BackArrow";

interface props {
  item: ProductType;
}
export const ProductDetail = ({ item }: props) => {
  const { title, price, image, description, category } = item;
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        p: "0.5rem",
        gap: "0.5rem",
        overflow: "scroll",
        justifyContent: "space-between",
      }}
    >
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: theme.palette.background.default,
            alignItems: "center",
            pl: 0,
          }}
        >
          <BackArrow />
        </Toolbar>
      </AppBar>
      <Box>
        <Image
          src={image}
          width={400}
          height={300}
          layout="responsive"
          alt={""}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography
          sx={{ fontSize: "1.5rem", color: `${theme.palette.primary.light}` }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "1.25rem",
            color: `${theme.palette.primary.light}`,
          }}
        >
          Category: {category}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.25rem",
            color: `${theme.palette.primary.light}`,
            marginRight: "1.5rem",
          }}
        >
          Price: ${price}
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            color: `${theme.palette.primary.light}`,
          }}
        >
          {description}.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{
              border: `1px solid ${theme.palette.primary.light}`,
              borderRadius: "0.75rem",
              mb: "1rem",
              mr: "0.5rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Add to cart
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
