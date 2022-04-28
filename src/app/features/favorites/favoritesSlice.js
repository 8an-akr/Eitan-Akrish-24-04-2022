import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
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
      } else {
        state.value.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
