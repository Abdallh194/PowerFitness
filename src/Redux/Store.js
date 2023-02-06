import { configureStore } from "@reduxjs/toolkit";
import ExerciseSlice from "./ExerciseSlice";

let Store = configureStore({
  reducer: {
    Exercise: ExerciseSlice,
  },
});
export default Store;
