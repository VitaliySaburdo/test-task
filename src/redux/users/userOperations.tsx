import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddUserProps } from "../../components/App/App.types";
import { notify } from "../../helpers/Notification";
import {UserProps} from '../../components/App/App.types';

const BASE_URL = "https://technical-task-api.icapgroupgmbh.com/api";

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

// PUT @ /users/:id
export const putUser = createAsyncThunk(
  'users/putContact',
  async ({ id, contact }: { id: string; contact: AddUserProps }, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/table/${id}`, contact);
      console.log(response);
      return response.data;
    } catch (error: any) {
      console.log(error);
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
