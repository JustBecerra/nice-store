"use client";
import { ProductType } from "@/redux/features/types";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { theme } from "../../../utils/theme";
import { BackArrow } from "../BackArrow";
import { useDispatch } from "react-redux";
import { addProducts } from "@/redux/features/product-slice";

interface props {
  item: ProductType;
}
export const ProductDetail = ({ item }: props) => {
  const dispatch = useDispatch();
  const { title, price, image, description, category, rating } = item;
  const handleDispatch = () => {
    dispatch(addProducts(item));
  };
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        gap: "0.5rem",
        overflow: { mobile: "scroll", laptop: "hidden" },
        justifyContent: { mobile: "space-between", laptop: "unset" },
        alignItems: "center",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { mobile: "column", laptop: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { mobile: "98%", laptop: "70%" },
            height: { laptop: "800px" },
            paddingBottom: { mobile: "160%", laptop: "0" },
            overflow: "hidden",
            borderRadius: "0.75rem",
            marginLeft: { laptop: "2rem" },
            marginTop: { laptop: "0.5rem" },
          }}
        >
          <Image src={image} layout="fill" objectFit="cover" alt={""} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "90%",
            gap: "1rem",
            px: "0.5rem",
            justifyContent: "space-around",
            alignItems: "center",
            border: { laptop: `1px solid ${theme.palette.primary.light}` },
            borderRadius: "0.75rem",
            mr: "0.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: { mobile: "1.5rem", laptop: "3rem" },
              color: `${theme.palette.primary.light}`,
              textAlign: { mobile: "unset", laptop: "center" },
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginLeft: { laptop: "1rem" },
            }}
          >
            <Typography
              sx={{
                fontSize: { mobile: "1.25rem", laptop: "1.75rem" },
                color: `${theme.palette.primary.light}`,
              }}
            >
              Category: {category}
            </Typography>
            <Typography
              sx={{
                fontSize: { mobile: "1.25rem", laptop: "1.75rem" },
                color: `${theme.palette.primary.light}`,
              }}
            >
              Rating: {rating.rate}/5 (out of {rating.count} rates)
            </Typography>
            <Typography
              sx={{
                fontSize: { mobile: "1.25rem", laptop: "1.75rem" },
                color: `${theme.palette.primary.light}`,
              }}
            >
              Price: ${price}
            </Typography>

            <Typography
              sx={{
                fontSize: { mobile: "1rem", laptop: "1.5rem" },
                color: `${theme.palette.primary.light}`,
              }}
            >
              {description}.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                border: `1px solid ${theme.palette.primary.light}`,
                backgroundColor: theme.palette.primary.main,
                borderRadius: "0.75rem",
                mb: "1rem",
                mr: "0.5rem",
                width: { laptop: "15rem" },
              }}
              onClick={handleDispatch}
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
    </Box>
  );
};
