import { useSelector, useDispatch } from "react-redux";
import { setActividadAction } from "../redux/actividadReducer";
import { postNewActividad } from "../route";

export default () => {
  const dispatch = useDispatch();

  const actividad = useSelector((state: any) => state.actividadReducer);

  const formHandle = {
    onSubmit: async (e) => {
      e.preventDefault();
      await postNewActividad(actividad);
      dispatch({ type: setActividadAction, payload: {} });
      alert("Datos guardados con éxito.");
    },
  };

  return {
    formHandle,
  };
};
