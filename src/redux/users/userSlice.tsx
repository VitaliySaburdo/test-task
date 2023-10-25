import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../../components/App/App.types";
import { getAllUsers, addUser, deleteUser, putUser } from "./userOperations";

interface UsersState {
  users: UserProps[];
  count: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  count: 0,
  isLoading: false,
  error: null,
};

const extraActions = [getAllUsers, addUser, deleteUser, putUser];

const getActions = (type: string) =>
  extraActions.map((action: any) => action[type]);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.users = [];
      state.count = 0;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.count = action.payload.count;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<UserProps>) => {
        state.users.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(putUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<string>) => {
        const index = state.users.findIndex(
          (item) => item.id === action.payload
        );
        state.users.splice(index, 1);
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

export const { reset } = usersSlice.actions;
export const productsReducer = usersSlice.reducer;
