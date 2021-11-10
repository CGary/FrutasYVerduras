import { useEffect, useState } from "react";
import { getAllResponsables, getAllPrioridades } from "../../common/route";
import { getAllUnidades } from "../../common/route";
import { getAllActividades } from "../../actividad/route";
import { getTareaFields } from "../route";

export default () => {
  const [state, setState] = useState({
    isInitData: false,
    arrActividad: [],
    arrResponsable: [],
    arrUnidad: [],
    arrPrioridad: [],
    tareaFields: {
      actividadField: {},
      nombreField: {},
      responsableField: {},
      unidadField: {},
      prioridadField: {},
      descripcionField: {},
      avanceField: {},
      inicioField: {},
      finField: {},
      notificacionField: {},
      objetivoField: {},
    },
  });

  const {
    isInitData,
    arrActividad,
    arrResponsable,
    arrUnidad,
    arrPrioridad,
    tareaFields,
  } = state;

  const getDataAsync = async () => {
    const [
      arrActividad,
      arrResponsable,
      arrUnidad,
      arrPrioridad,
      tareaFields,
    ]: any = await Promise.all([
      getAllActividades(),
      getAllResponsables(),
      getAllUnidades(),
      getAllPrioridades(),
      getTareaFields(),
    ]);

    setState({
      isInitData: true,
      arrActividad,
      arrResponsable,
      arrUnidad,
      arrPrioridad,
      tareaFields,
    });
  };

  useEffect(() => {
    getDataAsync();
  }, []);

  return {
    isInitData,
    arrActividad,
    arrResponsable,
    arrUnidad,
    arrPrioridad,
    ...tareaFields,
  };
};
