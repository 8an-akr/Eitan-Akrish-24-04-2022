import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "weather",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    favorites: (state) => {
      state.value = "favorites";
    },
    weather: (state) => {
      state.value = "weather";
    },
  },
});

export const { favorites, weather } = pageSlice.actions;

export default pageSlice.reducer;
