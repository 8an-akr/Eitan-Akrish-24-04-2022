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
export const cityWeatherSlice = createSlice({
  name: "cityWeather",
  initialState,
  reducers: {
    cityWeather: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { cityWeather } = cityWeatherSlice.actions;

export default cityWeatherSlice.reducer;
