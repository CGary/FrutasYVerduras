import getStore from "./getStore";
import { saveToLocalStorage, loadFromLocalStorage } from "./storage";
// import reduxThunk from "redux-thunk";
// import { applyMiddleware } from "redux";

const initialState = loadFromLocalStorage();

const arrComposes = [
  // applyMiddleware(reduxThunk)
];

if (window?.__REDUX_DEVTOOLS_EXTENSION__) {
  arrComposes.push(window?.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = getStore({ initialState, arrComposes });

store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state);
});

export default store;
