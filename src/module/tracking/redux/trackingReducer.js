const initialState = {
  isShowActividades: false,
  cdProyecto: null,
  responsable: "",
  prioridad: "",
  actividades: {},
};

export const setShowActividadesAction = "setShowActividadesAction";
export const setProyectoAction = "setProyectoAction";
export const setResponsableAction = "setResponsableAction";
export const setPrioridadAction = "setPrioridadAction";
export const setActividades = "setActividades";

export default (state = initialState, action) => {
  switch (action.type) {
    case setShowActividadesAction:
      return {
        ...state,
        isShowActividades: action.payload,
      };
    case setProyectoAction:
      return {
        ...state,
        cdProyecto: action.payload,
      };
    case setResponsableAction:
      return {
        ...state,
        responsable: action.payload,
      };
    case setPrioridadAction:
      return {
        ...state,
        prioridad: action.payload,
      };
    case setActividades:
      return {
        ...state,
        actividades: action.payload,
      };
  }
  return state;
};
