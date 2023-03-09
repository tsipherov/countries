import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
  "@@countries/loadCountries",
  async (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES);
  }
);

const initialState = {
  countryList: [],
  status: "",
  error: null,
};

const countriesSlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.countryList = action.payload.data;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
export const { setCountries, setError, setLoading } = countriesSlice.actions;
export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qnt: state.countries.countryList?.length,
});

export const selectAllCountries = (state) => state.countries.countryList;

export const selectFilteredCountries = (
  state,
  { search = "", region = "" }
) => {
  const { countryList: list } = state.countries;

  return list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  );
};
