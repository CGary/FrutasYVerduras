import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProyectoAction } from "../redux/proyectoReducer";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: setProyectoAction, payload: {} });
  }, []);
};
