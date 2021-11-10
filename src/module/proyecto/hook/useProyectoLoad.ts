import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProyectoAction } from "../redux/proyectoReducer";
import { getProyecto } from "../route";

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ isLoad: false });
  const { isLoad } = state;

  const cdProyecto = useSelector(
    (state: any) => state.proyectoReducer.cdProyecto
  );

  const getDataAsync = async (cdProyecto) => {
    const result = await getProyecto({ cdProyecto });
    dispatch({ type: setProyectoAction, payload: result });
    setState({ isLoad: true });
  };

  useEffect(() => {
    cdProyecto && getDataAsync(cdProyecto);
  }, []);

  return { isLoad };
};
