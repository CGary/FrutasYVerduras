import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";
import { Provider } from "react-redux";
import store from "./store";

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
