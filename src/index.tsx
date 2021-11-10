import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { addDispatchStoreEvent } from "./tools";
import App from "./components/App";

addDispatchStoreEvent(store);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
};

render();

// eslint-disable-next-line
module.hot && module.hot.accept("./components/App", () => render());
