const initialState = {};

export const setTareaAction = "setTareaAction";
export const addTareaAction = "addTareaAction";

export default (state = initialState, action) => {
  switch (action.type) {
    case setTareaAction: {
      return {
        ...action.payload,
      };
    }
    case addTareaAction: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
};
