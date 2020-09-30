import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const appContainer = document.getElementById("app");

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    appContainer
  );
};

render();

// eslint-disable-next-line
module.hot && module.hot.accept("./components/App/", () => render());
