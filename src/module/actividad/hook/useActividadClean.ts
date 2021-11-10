import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActividadAction } from "../redux/actividadReducer";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: setActividadAction, payload: {} });
  }, []);
};
