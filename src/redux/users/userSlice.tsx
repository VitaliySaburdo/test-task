import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../../components/App/App.types";
import {
  getAllUsers,
  getUserById,
  addUser,
  changeUser,
  changeFieldUser,
  deleteUser,
} from "./userOperations";

interface ProductsState {
  products: UserProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
};

const extraActions = [
  getAllUsers,
  getUserById,
  addUser,
  changeUser,
  changeFieldUser,
  deleteUser,
];

const getActions = (type: string) =>
  extraActions.map((action: any) => action[type]);

const productsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.products = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<UserProps>) => {
        state.products.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<string>) => {
        const index = state.products.findIndex(
          (item) => item.id === action.payload
        );
        state.products.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(...getActions("pending")), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions("rejected")), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions("fulfilled")), (state) => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const { reset } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
