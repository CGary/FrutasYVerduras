import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const container = document.getElementById("app");

const render = () => {
  ReactDOM.render(<App />, container);
};

render();

// eslint-disable-next-line
module.hot && module.hot.accept("./components/App", () => render());
