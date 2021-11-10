const initialState = {
  isNavBarOpen: true,
};

export const setNavBarOpenAction = "setNavBarOpenAction";
export const setNavBarNegationAction = "setNavBarNegationAction";

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case setNavBarOpenAction: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case setNavBarNegationAction: {
      return {
        ...state,
        isNavBarOpen: !state.isNavBarOpen,
      };
    }
  }
  return state;
};
