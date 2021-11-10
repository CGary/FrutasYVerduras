import { useState, createElement } from "react";
import { useDispatch } from "react-redux";
import { setShowActividadesAction } from "../../tracking/redux/trackingReducer";
import { NewActividadWrap, InfoActividadWrap } from "../wrap";
import { NewTareaWrap, InfoTareaWrap } from "../../tarea/wrap";
import { addTareaAction } from "../../tarea/redux/tareaReducer";
import { addActividadAction } from "../../actividad/redux/actividadReducer";

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    isDrawerOpen: false,
    childDrawer: null,
  });
  const { isDrawerOpen, childDrawer } = state;

  const actividadHeaderProps = {
    handleNewActividad: () => {
      setState((oldState) => ({
        ...oldState,
        isDrawerOpen: true,
        childDrawer: NewActividadWrap,
      }));
    },
    goBack: () => {
      dispatch({ type: setShowActividadesAction, payload: false });
    },
  };

  const propsDrawer = {
    handleCloseDrawer: () => {
      setState((oldState) => ({ ...oldState, isDrawerOpen: false }));
    },
    isDrawerOpen,
    children: childDrawer ? createElement(childDrawer, {}, null) : null,
  };

  const propsActividadCardsView = {
    handleNewTarea: () => {
      setState((oldState) => ({
        ...oldState,
        isDrawerOpen: true,
        childDrawer: NewTareaWrap,
      }));
    },
    handleEditTarea: (cdTarea) => {
      dispatch({ type: addTareaAction, payload: { cdTarea } });
      setState((oldState) => ({
        ...oldState,
        isDrawerOpen: true,
        childDrawer: InfoTareaWrap,
      }));
    },
    handleEditActividad: (cdActividad) => {
      dispatch({ type: addActividadAction, payload: { cdActividad } });
      setState((oldState) => ({
        ...oldState,
        isDrawerOpen: true,
        childDrawer: InfoActividadWrap,
      }));
    },
  };

  return {
    propsActividadCardsView,
    actividadHeaderProps,
    propsDrawer,
  };
};
