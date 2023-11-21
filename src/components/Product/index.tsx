import { Box, Typography } from "@mui/material";

interface props {
  title: string;
  description: string;
  price: number;
}

export const Product = ({ title, description, price }: props) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <Typography>{price}</Typography>
    </Box>
  );
};
