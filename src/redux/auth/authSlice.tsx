import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./authOperations";

type User = {
  _id: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
};

type AuthState = {
  user: User;
  isLoggedIn: boolean;

};

const initialState: AuthState = {
  user: { _id: null, name: null, email: null, role: null },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
});

export const authReducer = authSlice.reducer;


