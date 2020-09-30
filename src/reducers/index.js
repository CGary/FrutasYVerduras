import { combineReducers } from "redux";
const initialState = {
  isAuth: false,
  cargando: false,
  user: {},
};
const loginReducer = (state = initialState, action) => {
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

export default combineReducers({
  loginReducer,
});
