import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  region: "",
};

export const controlsSlise = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setRegion: (state, { payload }) => {
      state.region = payload;
    },
  },
});

export const controlsReducer = controlsSlise.reducer;
export const { setSearch, setRegion } = controlsSlise.actions;
export const selectControls = ({ controls }) => ({
  search: controls.search,
  region: controls.region,
});
