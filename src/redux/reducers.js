import { layoutReducer } from "../module/layout/redux";
import { tareaReducer } from "../module/tarea/redux";
import { actividadReducer } from "../module/actividad/redux";
import { proyectoReducer, proyectoGridReducer } from "../module/proyecto/redux";
import { trackingReducer } from "../module/tracking/redux";

export default (state = {}, action = "") => {
  return {
    layoutReducer: layoutReducer(state.layoutReducer, action),
    actividadReducer: actividadReducer(state.actividadReducer, action),
    tareaReducer: tareaReducer(state.tareaReducer, action),
    proyectoReducer: proyectoReducer(state.proyectoReducer, action),
    proyectoGridReducer: proyectoGridReducer(state.proyectoGridReducer, action),
    trackingReducer: trackingReducer(state.trackingReducer, action),
  };
};
