import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./types";

type initialStateType = {
  products: Product[];
  status: string;
  error: string;
};

const initialState: initialStateType = {
  products: [],
  status: "",
  error: "",
} as initialStateType;

const fetchProducts = createAsyncThunk("products", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const product = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export { fetchProducts };
export const { addProducts } = product.actions;
export default product.reducer;
