import { createStore } from "redux";
import { reducer } from "./reducer";

const countriesStore = createStore(reducer);
