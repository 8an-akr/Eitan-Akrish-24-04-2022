import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Tel Aviv-Yafo",
  latLng: {
    lat: 32.0852999,
    lng: 34.78176759999999,
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { searchValue } = searchSlice.actions;

export default searchSlice.reducer;
