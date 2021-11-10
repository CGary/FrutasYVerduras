import { useSelector, useDispatch } from "react-redux";
import { addProyectoAction } from "../redux/proyectoReducer";

export default () => {
  const dispatch = useDispatch();

  const {
    nombre = "",
    responsable = "",
    prioridad = "",
    descripcion = "",
  } = useSelector((state: any) => state.proyectoReducer);

  const addProperty = (props) => {
    dispatch({ type: addProyectoAction, payload: { ...props } });
  };

  const onChange = ({ target: { value, name } }) => {
    addProperty({ [name]: value });
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

  return {
    nombreHandle,
    responsableHandle,
    prioridadHandle,
    descripcionHandle,
  };
};
