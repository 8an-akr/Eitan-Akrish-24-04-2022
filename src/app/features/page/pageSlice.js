import { createSlice } from "@reduxjs/toolkit";

const savedSettings = JSON.parse(localStorage.getItem("settings")) || {
  value: "weather",
  settings: { theme: "dark", unit: "metric" },
};

const initialState = savedSettings;

const updateSettings = (state) => {
  localStorage.setItem("settings", JSON.stringify(state));
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    favorites: (state) => {
      state.value = "favorites";
      updateSettings(state);
    },
    weather: (state) => {
      state.value = "weather";
      updateSettings(state);
    },
    light: (state) => {
      state.settings.theme = "light";
      updateSettings(state);
    },
    dark: (state) => {
      state.settings.theme = "dark";
      updateSettings(state);
    },
    metric: (state) => {
      state.settings.unit = "metric";
      updateSettings(state);
    },
    imperial: (state) => {
      state.settings.unit = "imperial";
      updateSettings(state);
    },
  },
});

export const { favorites, weather, light, dark, metric, imperial } =
  pageSlice.actions;

export default pageSlice.reducer;
