import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const BASE_URL = "http://146.190.118.121/api";

// GET @ / productsAll
export const getAllUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/table/');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ / addProduct
export const addUser = createAsyncThunk(
  'products/addProduct',
  async (productData: string, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/table/`, productData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);