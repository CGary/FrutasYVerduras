const initialState = {};

export const setProyectoAction = "setProyectoAction";
export const addProyectoAction = "addProyectoAction";

export default (state = initialState, action) => {
  switch (action.type) {
    case setProyectoAction: {
      return {
        ...action.payload,
      };
    }
    case addProyectoAction: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
};
