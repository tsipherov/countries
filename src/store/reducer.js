import { combineReducers } from "redux";
import { SET_THEME } from "./themeActions";

export const themeReducer = (state = "light", { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({ theme: themeReducer });
