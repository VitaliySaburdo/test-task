import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddUserProps } from "../../components/App/App.types";
import { notify } from "../../helpers/Notification";

const BASE_URL = "https://technical-task-api.icapgroupgmbh.com/api";

// GET @ / getAllUsers
export const getAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (offset: number, thunkAPI) => {
    try {
      const res = await axios.get(`/table/?limit=10&offset=${offset}`);
      return {
        users: res.data.results,
        count: res.data.count,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ / addUser
export const addUser = createAsyncThunk(
  "users/addUser",
  async (userData: AddUserProps, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/table/`, userData);
      if (res.status === 201) {
        notify({
          message: "You successful add new contact",
          type: "success",
        });
      }
      return res.data;
    } catch (error: any) {
      if (error.code === "ERR_BAD_REQUEST") {
        notify({
          message: "A user with this email address already exists",
          type: "warning",
        });
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PUT @ /users/:id
export const putUser = createAsyncThunk(
  "users/putContact",
  async ({ id, contact }: { id: string; contact: AddUserProps }, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/table/${id}/`, contact);
      if (response.status === 200) {
        notify({
          message: "You successful changed contact",
          type: "success",
        });
      }
      return response.data;
    } catch (error: any) {
      if (error.code === "ERR_BAD_RESPONSE") {
        notify({
          message: "Server error",
          type: "error",
        });
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// DELETE @ / deleteUser
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/table/${id}/`);
      return response.data;
    } catch (error: any) {
      if (error.message === "Request failed with status code 403") {
        notify({
          message: "You do not have rights to do these actions",
          type: "warning",
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
