export const SET_COUNTRIES = "@@country/SET_COUNTRIES";
export const SET_LOADING = "@@country/SET_LOADING";
export const SET_ERROR = "@@country/ERROR";
export const SET_CURRENT_COUNTRY = "@@country/SET_CURRENT_COUNTRY";
export const SET_REGION = "@@country/SET_REGION";
export const SET_FILTER = "@@country/SET_FILTER";
export const SET_BORDERS = "@@country/SET_BORDERS";
export const CLEAR_BORDERS = "@@country/CLEAR_BORDERS";

export const clearBorders = () => ({
  type: CLEAR_BORDERS,
});

export const setBorders = (borders) => ({
  type: SET_BORDERS,
  payload: borders,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});

export const setCurrentCountry = (country) => ({
  type: SET_CURRENT_COUNTRY,
  payload: country,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadCountries =
  () =>
  (dispatch, getState, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.ALL_COUNTRIES)
      .then((res) => dispatch(setCountries(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };

export const loadCountryByName =
  (name) =>
  (dispatch, getState, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.searchByCountry(name))
      .then((res) => dispatch(setCurrentCountry(res.data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };

export const loadBorders =
  (codes) =>
  (dispatch, getState, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.filterByCode(codes))
      .then((res) => dispatch(setBorders(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
