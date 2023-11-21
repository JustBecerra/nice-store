"use client";
import { Box, Typography, useTheme } from "@mui/material";

interface props {
  title: string;
  description: string;
  price: number;
}

export const Product = ({ title, description, price }: props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "40%",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0.75rem",
        p: "0.5rem",
      }}
    >
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <Typography>{price}</Typography>
    </Box>
  );
};
