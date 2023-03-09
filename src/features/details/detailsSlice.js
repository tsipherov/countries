import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountryByName = createAsyncThunk(
  "@@details/loadCountryByName",
  async (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);

export const loadBorders = createAsyncThunk(
  "@@details/loadBorders",
  (codes, { extra: { client, api } }) => {
    return client.get(api.filterByCode(codes));
  }
);

const initialState = {
  currentCountry: {},
  borders: [],
  status: "",
  error: null,
};

export const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = "received";
        state.currentCountry = action.payload.data[0];
      })
      .addCase(loadBorders.fulfilled, (state, action) => {
        state.status = "received";
        state.borders = action.payload.data.map((country) => country.name);
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;

export const selectCountryDetails = (state) => ({
  currentCountry: state.details.currentCountry,
  status: state.details.status,
  error: state.details.error,
});

export const selectBorders = (state) => ({
  borders: state.details.borders,
});
