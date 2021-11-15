import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const slice = createSlice({
  name: "tasks",
  initialState: {
    isLoading: false,
    data: []
  },
  reducers: {
    addTask: (state, action) => {
      //const itemId = nanoid
      return state.data.push({
        task: action.payload,
        id: nanoid(4),
        isDone: false
      });
    },
    delTask(state, action) {},
    setDone(state, action) {
      state;
    }
  }
});
export const { addTask, delTask, setDone } = slice.actions;

export const selectTaskData = (state) => state.tasks.data;

export default slice.reducer;
