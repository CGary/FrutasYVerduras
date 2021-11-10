import { get, post } from "../../tools";

export const getAllProyectos = () => get("/getAllProyectos");

export const getGridProyectos = () => get("/getGridProyectos");

export const getProyectoFields = () => get("/getProyectoFields");

export const getProyecto = (query) => get("/getProyecto", query);

export const postNewProyecto = (query) => post("/postNewProyecto", query);

export const postDeleteProyecto = (query) => post("/postDeleteProyecto", query);

export const getGraphicProyecto = (query) => get("/getGraphicProyecto", query);
