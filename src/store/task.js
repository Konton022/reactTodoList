import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const slice = createSlice({
  name: "tasks",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.data.push({ task: action.payload, id: nanoid(4), isDone: false });
    },
    delTask(state, action) {},
    setDone(state, action) {
      state;
    },
  },
});
export const { addTask, delTask, setDone } = slice.actions;

export default slice.reducer;
