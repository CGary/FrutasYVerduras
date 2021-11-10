import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActividadAction } from "../redux/actividadReducer";
import { getActividad } from "../route";

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ isLoad: false });
  const { isLoad } = state;

  const cdActividad = useSelector(
    (state: any) => state.actividadReducer.cdActividad
  );

  const getDataAsync = async (cdActividad) => {
    const result = await getActividad({ cdActividad });
    dispatch({ type: setActividadAction, payload: result });
    setState({ isLoad: true });
  };

  useEffect(() => {
    cdActividad && getDataAsync(cdActividad);
  }, []);

  return { isLoad };
};
