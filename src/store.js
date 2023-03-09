import axios from "axios";
import * as api from "./config";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme/themeSlice";
import { countriesReducer } from "./features/countries/countriesSlice";
import { controlsReducer } from "./features/controls/controlsSlise";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export default store;
