import { createSlice } from "@reduxjs/toolkit";

const local = JSON.parse(localStorage.getItem("favorites")) || [];

const initialState = {
  value: local,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (
        state.value.find((favorite) => favorite.name === action.payload.name)
      ) {
        state.value = state.value.filter(
          (favorite) => favorite.name !== action.payload.name
        );
        localStorage.setItem("favorites", JSON.stringify(state.value));
      } else {
        state.value.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.value));
      }
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
