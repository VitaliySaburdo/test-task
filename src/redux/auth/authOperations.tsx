import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notify } from "../../helpers/Notification";

axios.defaults.baseURL = "http://146.190.118.121/api";


type LogInPayload = {
  values: { username: string; password: string };
};

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ values }: LogInPayload, thunkAPI) => {
    try {
      const res = await axios.post("/login/", values);
      console.log(res);
      if (res.status === 201) {
        notify({
          message: `Welcome "${values.username}"`,
          type: "success",
        });
      }
      return res.data;
    } catch (error: any) {
      const { message } = error.response.data.error;
      if (message === "Invalid credentials.") {
        notify({
          message: `User "${values.username}" is not found, please register and try again`,
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



