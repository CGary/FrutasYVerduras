import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

// const loginReducer = {
//   isAuth: true,
//   cargando: false,
//   user: {
//     nombre: "Pepe",
//     apellido: "Cortizona",
//     user: "pepe",
//     pass: "1234",
//   },
// };
const loginReducer = {
  isAuth: false,
  cargando: false,
  user: {},
};

const store = createStore(
  reducers,
  { loginReducer },
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// console.log(store.getState());
// store.subscribe(() => console.log(store.getState()));

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
