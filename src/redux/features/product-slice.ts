import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "./types";

type initialStateType = {
  products: ProductType[];
  productCart: ProductType[];
  filteredCart: ProductType[];
  productDetail: ProductType;
  status: string;
  error: string;
};

const initialState: initialStateType = {
  products: [],
  productCart: [],
  filteredCart: [],
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
    addProducts: (state, action: PayloadAction<ProductType>) => {
      state.productCart = [...state.productCart, action.payload];
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const repeated = state.productCart.findIndex(
        (elem) => elem.title === action.payload
      );
      if (repeated !== -1) {
        state.productCart = state.productCart.splice(repeated, 1);
      }
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
export const { addProducts, removeProduct } = products.actions;
export default products.reducer;
