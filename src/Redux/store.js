import { configureStore } from "@reduxjs/toolkit"
import toDoReducer from "./TodoSlice"
export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
})
