import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {UserProps} from '../../components/App/App.types'


const BASE_URL = "https://technical-task-api.icapgroupgmbh.com/api";

// GET @ / productsAll
export const getAllUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/table/');
      return res.data.results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ / getUserById
export const getUserById= createAsyncThunk(
  'users/getUserById',
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
  'users/addUser',
  async (userData: UserProps, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/table/`, userData);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PUT @ / changeUser
export const changeUser = createAsyncThunk(
  'users/changeUser',
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
  'users/changeFieldUser',
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
  'users/deleteUser',
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.delete(`${BASE_URL}/table/${id}` );
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);