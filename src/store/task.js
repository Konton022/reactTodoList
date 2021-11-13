import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const slice = createSlice({
  name: "taskManager",
  initialState: {
    isLoading: false,
    data: [],
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
console.log("slice.reducer", slice.reducer);
export const selectTaskData = (state) => state.task.data;
export default slice.reducer;
