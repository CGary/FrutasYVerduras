import { useSelector, useDispatch } from "react-redux";
import { addActividadAction } from "../redux/actividadReducer";

export default () => {
  const dispatch = useDispatch();

  const {
    proyecto = "",
    nombre = "",
    responsable = "",
    prioridad = "",
    descripcion = "",
    notificacion = "",
    objetivo = "",
  } = useSelector((state: any) => state.actividadReducer);

  const addProperty = (props) => {
    dispatch({ type: addActividadAction, payload: { ...props } });
  };

  const onChange = ({ target: { value, name } }) => {
    addProperty({ [name]: value });
  };

  const proyectoHandle = {
    name: "proyecto",
    value: proyecto,
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
    proyectoHandle,
    nombreHandle,
    responsableHandle,
    prioridadHandle,
    descripcionHandle,
    notificacionHandle,
    objetivoHandle,
  };
};
