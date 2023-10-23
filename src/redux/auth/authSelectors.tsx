import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

const authSelectors = {
  selectIsLoggedIn,
};

export default authSelectors;
