import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type UserType = {
  ID: number;
  Fullname: string;
  Email: string;
  Password: string;
  Address: string;
};

type initialStateType = {
  user: UserType;
  status: string;
  error: string;
};

const initialState: initialStateType = {
  user: {
    ID: 0,
    Fullname: "",
    Email: "",
    Password: "",
    Address: "",
  },
  status: "",
  error: "",
} as initialStateType;

const modifyUser = createAsyncThunk("user", async (userData: UserType) => {
  const response = await axios.put("http://127.0.0.1:8080/user", userData);
  return response.data;
});

export const users = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(modifyUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(modifyUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(modifyUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export { modifyUser };
export const { updateUser } = users.actions;
export default users.reducer;
