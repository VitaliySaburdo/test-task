import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddUserProps } from "../../components/App/App.types";
import { notify } from "../../helpers/Notification";

const BASE_URL = "https://technical-task-api.icapgroupgmbh.com/api";
// "https://technical-task-api.icapgroupgmbh.com/api/table/?limit=10&offset=10"

// GET @ / productsAll
export const getAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (page: number, thunkAPI) => {
    try {
      const res = await axios.get(`/table/?limit=10&offset=${page}`);
      return res.data.results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ / getUserById
export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.get(`/table/${id}`);
      return res.data;
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PUT @ / changeUser
export const changeUser = createAsyncThunk(
  "users/changeUser",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.put(`/table/${id}`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PATCH @ / changeUser
export const changeFieldUser = createAsyncThunk(
  "users/changeFieldUser",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.patch(`/table/${id}`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// DELETE @ / deleteUser
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.delete(`${BASE_URL}/table/${id}`);
      return res.data;
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
