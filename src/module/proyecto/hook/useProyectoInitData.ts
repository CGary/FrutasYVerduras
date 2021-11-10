import { useEffect, useState } from "react";
import { getAllResponsables, getAllPrioridades } from "../../common/route";
import { getProyectoFields } from "../route";

export default () => {
  const [state, setState] = useState({
    isInitData: false,
    arrResponsable: [],
    arrPrioridad: [],
    proyectoFields: {
      nombreField: {},
      responsableField: {},
      prioridadField: {},
      descripcionField: {},
    },
  });
  const { isInitData, arrResponsable, arrPrioridad, proyectoFields } = state;

  const getDataAsync = async () => {
    const [arrResponsable, arrPrioridad, proyectoFields]: any =
      await Promise.all([
        getAllResponsables(),
        getAllPrioridades(),
        getProyectoFields(),
      ]);
    setState({
      isInitData: true,
      arrResponsable,
      arrPrioridad,
      proyectoFields,
    });
  };

  useEffect(() => {
    getDataAsync();
  }, []);

  return {
    isInitData,
    arrResponsable,
    arrPrioridad,
    ...proyectoFields,
  };
};
