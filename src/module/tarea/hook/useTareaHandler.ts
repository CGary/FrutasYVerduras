import { useSelector, useDispatch } from "react-redux";
import { addTareaAction } from "../redux/tareaReducer";

export default () => {
  const dispatch = useDispatch();

  const {
    actividad = "",
    nombre = "",
    responsable = "",
    unidad = "",
    prioridad = "",
    descripcion = "",
    avance = "",
    inicio = null,
    fin = null,
    notificacion = "",
    objetivo = "",
  } = useSelector((state: any) => state.tareaReducer);

  const addProperty = (props) => {
    dispatch({ type: addTareaAction, payload: { ...props } });
  };

  const onChange = ({ target: { value, name } }) => {
    addProperty({ [name]: value });
  };

  const actividadHandle = {
    name: "actividad",
    value: actividad,
    onChange,
  };

  const nombreHandle = {
    name: "nombre",
    value: nombre,
    onChange,
  };

  const responsableHandle = {
    name: "responsable",
    value: responsable,
    onChange,
  };

  const unidadHandle = {
    name: "unidad",
    value: unidad,
    onChange,
  };

  const prioridadHandle = {
    name: "prioridad",
    value: prioridad,
    onChange,
  };

  const descripcionHandle = {
    name: "descripcion",
    value: descripcion,
    onChange,
  };

  const avanceHandle = {
    name: "avance",
    value: avance,
    onChange,
  };

  const inicioHandle = {
    minDate: new Date(),
    value: inicio,
    onChange: (e) => {
      addProperty({ inicio: e });
    },
  };

  const finHandle = {
    minDate: inicio || new Date(),
    value: fin,
    onChange: (e) => {
      addProperty({ fin: e });
    },
  };

  const notificacionHandle = {
    name: "notificacion",
    value: notificacion,
    onChange,
  };

  const objetivoHandle = {
    name: "objetivo",
    value: objetivo,
    onChange,
  };

  return {
    actividadHandle,
    nombreHandle,
    responsableHandle,
    unidadHandle,
    prioridadHandle,
    descripcionHandle,
    avanceHandle,
    inicioHandle,
    finHandle,
    notificacionHandle,
    objetivoHandle,
  };
};
