import { get, post } from "../../tools";

export const getAllActividades = () => get("/getAllActividades");

export const getActividadFields = () => get("/getActividadFields");

export const postNewActividad = (query) => post("/postNewActividad", query);

export const getActividadesByProyecto = (query) =>
  get("/getActividadesByProyecto", query);

export const getActividad = (query) => get("/getActividad", query);

export const getGraphicActividad = (query) =>
  get("/getGraphicActividad", query);
