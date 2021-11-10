import { useProyectoGridData } from ".";
import { useState, useEffect } from "react";
import { emitter, proyectoSaved } from "../../../tools";
import { useDispatch } from "react-redux";
import { addProyectoAction } from "../redux/proyectoReducer";
import { setShowActividadesAction } from "../../tracking/redux/trackingReducer";
import { setProyectoAction } from "../../tracking/redux/trackingReducer";

export default () => {
  const dispatch = useDispatch();

  const handleViewProyecto = (cdProyecto) => {
    dispatch({ type: addProyectoAction, payload: { cdProyecto } });
    setState((oldState) => ({
      ...oldState,
      isDrawerOpen: true,
      isNewProyecto: false,
    }));
  };

  const { columns, data = [] } = useProyectoGridData({ handleViewProyecto });

  const [state, setState] = useState({
    buscar: "",
    isDrawerOpen: false,
    isNewProyecto: true,
  });
  const { buscar, isDrawerOpen, isNewProyecto } = state;

  const propsProyectoGrid = {
    id: "table-proyecto",
    columns,
    data,
    buscar,
    selectedRow: (cdProyecto) => {
      dispatch({ type: setProyectoAction, payload: cdProyecto });
      dispatch({ type: setShowActividadesAction, payload: true });
    },
  };

  const propsNuevo = {
    onClick: () => {
      setState((oldState) => ({
        ...oldState,
        isDrawerOpen: true,
        isNewProyecto: true,
      }));
    },
  };
  const propsBuscar = {
    value: buscar,
    onChange: ({ target: { value } }) => {
      setState((oldState) => ({ ...oldState, buscar: value }));
    },
  };

  const propsDrawer = {
    isDrawerOpen,
    handleCloseDrawer: () => {
      setState((oldState) => ({ ...oldState, isDrawerOpen: false }));
    },
  };

  useEffect(() => {
    const listener = emitter.addListener(proyectoSaved, () => {
      setState((oldState) => ({ ...oldState, isDrawerOpen: false }));
    });
    return () => {
      listener.remove();
    };
  }, []);

  return {
    propsProyectoGrid,
    propsProyectoHeadGrid: { propsNuevo, propsBuscar },
    propsDrawer,
    isNewProyecto,
  };
};
