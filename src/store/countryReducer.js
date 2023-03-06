import {
  SET_COUNTRIES,
  SET_LOADING,
  SET_ERROR,
  SET_CURRENT_COUNTRY,
} from "./countryActions";

const initState = {
  countryList: [],
  status: "",
  error: null,
  currentCountry: {},
};

export const countryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return { ...state, countryList: payload, status: "received" };

    case SET_CURRENT_COUNTRY:
      return { ...state, currentCountry: payload, status: "received" };

    case SET_LOADING:
      return { ...state, status: "loading", error: null };
    case SET_ERROR:
      return { ...state, error: payload, status: "rejected" };

    default:
      return state;
  }
};
