import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer, // Assign the todoReducer to the "todo" key
  },
});

// Define RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
