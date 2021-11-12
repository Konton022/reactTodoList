import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "task",
  initialState: {
    data: [{ id: 1, task: "hello", isDone: false }],
  },
});
