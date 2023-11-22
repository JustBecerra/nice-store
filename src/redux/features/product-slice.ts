import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "./types";

type initialStateType = {
  value: Product[];
};

const initialState: initialStateType = {
  value: [],
} as initialStateType;

export const product = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    },
  },
});

export const { addProducts } = product.actions;
export default product.reducer;
