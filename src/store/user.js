import { createSlice } from "@reduxjs/toolkit";
import FirebaseClass from "../service/firebase";
//let initUser = JSON.parse(localStorage.getItem("user"));
export const slice = createSlice({
  name: "user",
  initialState: {
    data: {},
  },
  reducers: {
    addUser: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    deleteUser: (state, action) => ({
      ...state,
      data: {},
    }),
  },
});
export const { addUser } = slice.actions;
export const selectUserData = (state) => state.user.data;

export const signUserFireAsync = () => async (dispath) => {};

export default slice.reducer;
