export const selectCountriesInfo = (state) => ({
  status: state.country.status,
  error: state.country.error,
  qnt: state.country.countryList.length,
  currentCountry: state.country.currentCountry,
  search: state.country.search,
  region: state.country.region,
  borders: state.country.borders,
});

export const selectAllCountries = (state) => state.country.countryList;
export const selectFilteredCountries = (state, { search, region }) => {
  const { countryList: list } = state.country;
  let filteredListbyRegion = list;
  if (region) {
    filteredListbyRegion = list.filter((country) => country.region === region);
  }
  return filteredListbyRegion.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
};
