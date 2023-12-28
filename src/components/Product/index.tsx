"use client";
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
        width: { mobile: "75%", laptop: "25%" },
        backgroundColor: theme.palette.background.default,
        borderRadius: "0.75rem",
        p: "0.5rem",
        gap: "0.5rem",
      }}
    >
      <Link href={`product/${id}`} passHref>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingBottom: "160%",
            overflow: "hidden",
            borderRadius: "0.75rem",
          }}
        >
          <Image src={image} layout="fill" objectFit="cover" alt="" />
        </Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            color: theme.palette.primary.light,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: "1.25rem", color: theme.palette.primary.light }}
        >
          ${price}
        </Typography>
      </Link>
    </Box>
  );
};
