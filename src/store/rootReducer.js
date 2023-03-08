import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";
// import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({
  // theme: themeReducer,
  country: countryReducer,
});
