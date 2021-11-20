import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const slice = createSlice({
  name: "tasks",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    addTask: (state, action) => ({
      ...state,
      isLoading: false,
      data: [
        ...state.data,
        {
          task: action.payload,
          id: nanoid(4),
          isDone: false,
        },
      ],
    }),
    delTask: (state, action) => ({
      ...state,
      isLoading: false,
      data: state.data.filter((item) => item.id !== action.payload),
    }),
    setDone: (state, action) => ({
      ...state,
      isLoading: false,
      data: state.data.map((item) => {
        if (item.id !== action.payload) {
          {
            return item;
          }
        } else {
          return { ...item, isDone: true };
        }
      }),
    }),
  },
});
export const { addTask, delTask, setDone } = slice.actions;

export const selectTaskData = (state) => state.tasks.data;

export default slice.reducer;
