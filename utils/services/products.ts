import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "./types";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints: (builder) => ({
    getProductByName: builder.query<Product, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByNameQuery } = productsApi;
