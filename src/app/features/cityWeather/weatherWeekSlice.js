import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    current: { dt: Date.now() },
    daily: [
      { dt: Date.now() },
      { dt: Date.now() + 2592000000 },
      { dt: Date.now() + 2592000000 * 2 },
      { dt: Date.now() + 2592000000 * 3 },
      { dt: Date.now() + 2592000000 * 4 },
      { dt: Date.now() + 2592000000 * 5 },
      { dt: Date.now() + 2592000000 * 6 },
    ],
  },
};
export const weatherWeekSlice = createSlice({
  name: "weatherWeek",
  initialState,
  reducers: {
    weatherWeek: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { weatherWeek } = weatherWeekSlice.actions;

export default weatherWeekSlice.reducer;
