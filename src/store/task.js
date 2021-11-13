import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  isLoading: false,
  data: [],
};

export const slice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    addTask(state, action) {
      return state.push({ task: action.payload, isDone: false });
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
