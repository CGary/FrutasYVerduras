// import { combineReducers } from "redux";
const initialStateLogin = {
  isAuth: false,
  cargando: false,
  user: {},
};
const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case "logout":
      return {
        ...state,
        cargando: false,
        isAuth: false,
      };

    case "loading":
      return {
        ...state,
        cargando: true,
        isAuth: false,
      };

    case "login":
      return {
        ...state,
        cargando: false,
        isAuth: true,
        user: action.payload,
      };

    default:
      return state;
  }
};

const initialStateHome = {
  nombre: process.env.TITLE,
};
const homeReducer = (state = initialStateHome, action) => {
  switch (action.type) {
    case "cambiarNombre":
      return {
        ...state,
        nombre: action.payload,
      };
    default:
      return state;
  }
};

// export default combineReducers({
//   loginReducer,
//   homeReducer,
// });

export default (state = {}, action) => {
  return {
    loginReducer: loginReducer(state.loginReducer, action),
    homeReducer: homeReducer(state.homeReducer, action),
  };
};
