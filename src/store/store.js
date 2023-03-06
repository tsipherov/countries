import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducer";
import thunk from "redux-thunk";
import axios from "axios";
import * as api from "../config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);
export default store;
