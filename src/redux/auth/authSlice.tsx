import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./authOperations";

type AuthState = {
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
      })
});

export const authReducer = authSlice.reducer;


