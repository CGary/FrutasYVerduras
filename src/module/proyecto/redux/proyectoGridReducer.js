const initialState = {
  fields: [],
  data: [],
};

export const setProyectoGridAction = "setProyectoGridAction";
// export const addProyectoGridAction = "addProyectoGridAction";

export default (state = initialState, action) => {
  switch (action.type) {
    case setProyectoGridAction: {
      return {
        ...state,
        ...action.payload,
      };
    }
    // case addProyectoGridAction: {
    //   return [...state, ...action.payload];
    // }
  }
  return state;
};
