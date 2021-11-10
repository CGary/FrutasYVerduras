import { useSelector, useDispatch } from "react-redux";
import { setTareaAction } from "../redux/tareaReducer";
import { postNewTarea } from "../route";

export default () => {
  const dispatch = useDispatch();

  const tarea = useSelector((state: any) => state.tareaReducer);

  const formHandle = {
    onSubmit: async (e) => {
      e.preventDefault();
      await postNewTarea(tarea);
      dispatch({ type: setTareaAction, payload: {} });
      alert("Datos guardados con éxito.");
    },
  };

  const deleteHandle = {
    onClick: () => {
      alert("delete");
    },
  };

  return {
    formHandle,
    deleteHandle,
  };
};
