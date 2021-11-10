import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTareaAction } from "../redux/tareaReducer";
import { getTarea } from "../route";

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ isLoad: false });
  const { isLoad } = state;

  const cdTarea = useSelector((state: any) => state.tareaReducer.cdTarea);

  const getDataAsync = async (cdTarea) => {
    const result = await getTarea({ cdTarea });
    dispatch({ type: setTareaAction, payload: result });
    setState({ isLoad: true });
  };

  useEffect(() => {
    cdTarea && getDataAsync(cdTarea);
  }, []);

  return { isLoad };
};
