import { createSlice } from "@reduxjs/toolkit";
//let initUser = JSON.parse(localStorage.getItem("user"));
export const slice = createSlice({
  name: "user",
  initialState: {
    data: {}
  },
  reducers: {
    addUser: (state, action) => ({
      ...state,
      data: action.payload
    }),
    deleteUser: (state, action) => ({
      ...state,
      data: {}
    })
  }
});
export const { addUser } = slice.actions;
export const selectUserData = (state) => state.user.data;

export default slice.reducer;
