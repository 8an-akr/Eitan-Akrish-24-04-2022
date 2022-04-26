import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
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
