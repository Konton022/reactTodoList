import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const slice = createSlice({
  name: "tasks",
  initialState: {
    isLoading: false,
    data: [{ id: nanoid(4), task: "do somethink", isDone: false }],
  },
  reducers: {
    addTask(state, action) {
      state;
    },
    delTask(state, action) {
      state;
    },
    setDone(state, action) {
      state;
    },
  },
});
export const { addTask, delTask, setDone } = slice.actions;

export default slice.reducer;
