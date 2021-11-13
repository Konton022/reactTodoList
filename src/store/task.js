import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = [{ id: 1, task: "hello", isDone: false }];

export const slice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      return state.push({ task: action.payload, isDone: false, id: nanoid(4) });
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
