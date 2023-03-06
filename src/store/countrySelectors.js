export const selectCountriesInfo = (state) => ({
  status: state.country.status,
  error: state.country.error,
  qnt: state.country.countryList.length,
});

export const selectAllCountries = (state) => state.country.countryList;
