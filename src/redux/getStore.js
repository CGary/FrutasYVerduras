import { createStore, compose } from "redux";
import reducers from "./reducers";

export default ({ initialState, arrComposes }) => {
  return createStore(reducers, initialState, compose(...arrComposes));
};
