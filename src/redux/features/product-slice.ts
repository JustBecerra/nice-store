import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "./types";

type initialStateType = {
  products: ProductType[];
  productDetail: ProductType;
  status: string;
  error: string;
};

const initialState: initialStateType = {
  products: [],
  productDetail: {
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      count: 0,
      rate: 0,
    },
    title: "",
  },
  status: "",
  error: "",
} as initialStateType;

const fetchProducts = createAsyncThunk("products", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const fetchProduct = createAsyncThunk("product", async (id: number) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
});

export const products = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ProductType[]>) => {
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
      })
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetail = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export { fetchProducts, fetchProduct };
export const { addProducts } = products.actions;
export default products.reducer;
