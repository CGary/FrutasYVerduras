const initialState = {};

export const setActividadAction = "setActividadAction";
export const addActividadAction = "addActividadAction";

export default (state = initialState, action) => {
  switch (action.type) {
    case setActividadAction: {
      return {
        ...action.payload,
      };
    }
    case addActividadAction: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
};
