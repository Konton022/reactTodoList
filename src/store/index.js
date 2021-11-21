import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task";
import userReduser from "./user";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReduser,
  },
});

export default store;
