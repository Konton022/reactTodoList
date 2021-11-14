import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
