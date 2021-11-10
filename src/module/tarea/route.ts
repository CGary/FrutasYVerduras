import { get, post } from "../../tools";

export const getTareaFields = () => get("/getTareaFields");

export const postNewTarea = (query) => post("/postNewTarea", query);

export const getTarea = (query) => get("/getTarea", query);

export const getGraphicTarea = (query) => get("/getGraphicTarea", query);
