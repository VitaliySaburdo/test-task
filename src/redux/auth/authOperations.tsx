import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { notify } from "../../helpers/Notification";

axios.defaults.baseURL = "https://146.190.118.121/api";

// Utility to add JWT
const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (
    credentials: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
            if (res.status === 201) {
        notify({
          message: `Congratulations ${credentials.name} you register`,
          type: "success",
        });
      }
      return res.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

type LogInPayload = {
  values: { name: string; password: string };
};

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ values }: LogInPayload, thunkAPI) => {
    try {
      const res = await axios.post("/login", values);
      setAuthHeader(res.data.token);
      if (res.status === 201) {
        notify({
          message: `Welcome "${res.data.user.name}"`,
          type: "success",
        });
      }
      return res.data;
    } catch (error: any) {
      const { message } = error.response.data;
      if (message === "Email don`t found") {
        notify({
          message: `User "${values.name}" is not found, please register and try again`,
          type: "warning",
        });
      }
      if (message === "Password is wrong") {
        notify({
          message: `Password is wrong try again`,
          type: "warning",
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
