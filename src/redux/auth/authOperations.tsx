import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notify } from "../../helpers/Notification";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api";


type LogInPayload = {
  values: { username: string; password: string };
};

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ values }: LogInPayload, thunkAPI) => {
    try {
      const res = await axios.post("/login/", values);
      console.log(res);
      if (res.status === 200) {
        notify({
          message: `Welcome "${values.username}"`,
          type: "success",
        });
      }
      return res.data;
    } catch (error: any) {
      console.log(error)
      if (error.response.statusText === "Unauthorized") {
        notify({
          message: `User "${values.username}" is not found, please register and try again`,
          type: "warning",
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



