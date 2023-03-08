import axios from "axios";
import * as api from "./config";
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/theme/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
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
    }),
});

export default store;
