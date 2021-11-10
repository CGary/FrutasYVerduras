import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTareaAction } from "../redux/tareaReducer";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: setTareaAction, payload: {} });
  }, []);
};
