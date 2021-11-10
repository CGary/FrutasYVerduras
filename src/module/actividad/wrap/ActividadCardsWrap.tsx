import * as React from "react";
import { DrawerContainer } from "../../../components/common";
import { ActividadCardsView, ActividadHeadView } from "../view";
import { useActividadCard, useActividadCardInitData } from "../hook";
import { useTareaInitData } from "../../tarea/hook";
import { useTaskFilter } from "../../tracking/hook";

export default function ActividadCardsWrap() {
  const actividadDataProps = useActividadCardInitData();
  const { propsActividadCardsView, actividadHeaderProps, propsDrawer } =
    useActividadCard();
  const tareaInitData = useTareaInitData();
  const taskFilter = useTaskFilter();
  return (
    <>
      <ActividadHeadView
        {...{ name: actividadDataProps.nombre }}
        {...actividadHeaderProps}
        {...tareaInitData}
        {...taskFilter}
      />
      <ActividadCardsView
        {...propsActividadCardsView}
        {...actividadDataProps}
      />
      <DrawerContainer {...propsDrawer} />
    </>
  );
}
