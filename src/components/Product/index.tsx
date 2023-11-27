"use client";
import { ProductType } from "@/redux/features/types";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  title: string;
  price: number;
  image: string;
  id: number;
}

export const Product = ({ title, price, image, id }: props) => {
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
      <Link href={`/${id}`}>
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
          ${price}
        </Typography>
      </Link>
    </Box>
  );
};
