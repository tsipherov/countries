import {
  SET_COUNTRIES,
  SET_LOADING,
  SET_ERROR,
  SET_CURRENT_COUNTRY,
  SET_REGION,
  SET_FILTER,
} from "./countryActions";

const initState = {
  countryList: [],
  status: "",
  error: null,
  currentCountry: {},
  search: "",
  region: "",
};

export const countryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return { ...state, countryList: payload, status: "received" };

    case SET_REGION:
      return { ...state, region: payload };

    case SET_CURRENT_COUNTRY:
      return { ...state, currentCountry: payload, status: "received" };

    case SET_FILTER:
      return { ...state, search: payload };

    case SET_LOADING:
      return { ...state, status: "loading", error: null };

    case SET_ERROR:
      return { ...state, error: payload, status: "rejected" };

    default:
      return state;
  }
};
