import { useSelector, useDispatch } from "react-redux";
import {
  setPrioridadAction,
  setResponsableAction,
} from "../redux/trackingReducer";

export default () => {
  const dispatch = useDispatch();

  const responsable = useSelector(
    (state: any) => state.trackingReducer.responsable
  );
  const prioridad = useSelector(
    (state: any) => state.trackingReducer.prioridad
  );

  const responsableHandle = {
    name: "responsable",
    value: responsable,
    onChange: ({ target: { value } }) => {
      dispatch({ type: setResponsableAction, payload: value });
    },
  };

  const prioridadHandle = {
    name: "prioridad",
    value: prioridad,
    onChange: ({ target: { value } }) => {
      dispatch({ type: setPrioridadAction, payload: value });
    },
  };

  const handleClearPrioridad = () => {
    dispatch({ type: setPrioridadAction, payload: "" });
  };

  const handleClearResponsable = () => {
    dispatch({ type: setResponsableAction, payload: "" });
  };

  return {
    responsableHandle,
    prioridadHandle,
    handleClearPrioridad,
    handleClearResponsable,
  };
};
