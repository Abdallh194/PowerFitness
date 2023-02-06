import { createSlice } from "@reduxjs/toolkit";

export const ExerciseSlice = createSlice({
  name: "user",
  initialState: {
    Exercise: [
      "back",
      "cardio",
      "chest",
      "lower arms",
      "lower legs",
      "neck",
      "shoulders",
      "upper arms",
      "upper legs",
      "waist",
    ],
    SearchKey: "",
  },
  reducers: {
    SetKey: (state, action) => {
      state.SearchKey = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetKey } = ExerciseSlice.actions;

export default ExerciseSlice.reducer;
