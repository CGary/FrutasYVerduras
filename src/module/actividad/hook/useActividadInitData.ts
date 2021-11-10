import { useEffect, useState } from "react";
import { getAllResponsables, getAllPrioridades } from "../../common/route";
import { getAllProyectos } from "../../proyecto/route";
import { getActividadFields } from "../route";

export default () => {
  const [state, setState] = useState({
    isInitData: false,
    arrProyecto: [],
    arrResponsable: [],
    arrPrioridad: [],
    actividadFields: {
      proyectoField: {},
      nombreField: {},
      responsableField: {},
      prioridadField: {},
      descripcionField: {},
      notificacionField: {},
      objetivoField: {},
    },
  });
  const {
    isInitData,
    arrProyecto,
    arrResponsable,
    arrPrioridad,
    actividadFields,
  } = state;

  const getDataAsync = async () => {
    const [arrProyecto, arrResponsable, arrPrioridad, actividadFields]: any =
      await Promise.all([
        getAllProyectos(),
        getAllResponsables(),
        getAllPrioridades(),
        getActividadFields(),
      ]);
    setState({
      isInitData: true,
      arrProyecto,
      arrResponsable,
      arrPrioridad,
      actividadFields,
    });
  };

  useEffect(() => {
    getDataAsync();
  }, []);

  return {
    isInitData,
    arrProyecto,
    arrResponsable,
    arrPrioridad,
    ...actividadFields,
  };
};
