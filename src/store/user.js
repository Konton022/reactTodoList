import { createSlice } from "@reduxjs/toolkit";

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
  },
});
export const { addUser } = slice.actions;
export default slice.reducer;
