import { useSelector, useDispatch } from "react-redux";
import { setProyectoAction } from "../redux/proyectoReducer";
import { postNewProyecto, postDeleteProyecto } from "../route";
import { emitter, proyectoSaved } from "../../../tools";

export default () => {
  const dispatch = useDispatch();

  const proyecto = useSelector((state: any) => state.proyectoReducer);

  const formHandle = {
    onSubmit: async (e) => {
      e.preventDefault();
      await postNewProyecto(proyecto);
      dispatch({ type: setProyectoAction, payload: {} });
      emitter.emit(proyectoSaved);
      alert("Datos guardados con éxito.");
    },
  };

  const deleteHandle = {
    onClick: async () => {
      const { cdProyecto } = proyecto;
      await postDeleteProyecto({ cdProyecto });
      dispatch({ type: setProyectoAction, payload: {} });
      emitter.emit(proyectoSaved);
      alert("Datos eliminados con éxito.");
    },
  };

  return {
    formHandle,
    deleteHandle,
  };
};
