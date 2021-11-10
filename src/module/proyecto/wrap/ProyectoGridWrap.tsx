import * as React from "react";
import { DrawerContainer } from "../../../components/common";
import { ProyectoHeadGridView, ProyectoGridView } from "../view";
import { useProyectoGrid } from "../hook";
import { NewProyectoWrap, InfoProyectoWrap } from ".";

export default function ProyectoGridWrap() {
  const {
    propsProyectoGrid,
    propsProyectoHeadGrid,
    propsDrawer,
    isNewProyecto,
  } = useProyectoGrid();

  return (
    <>
      <ProyectoHeadGridView {...propsProyectoHeadGrid} />
      <ProyectoGridView {...propsProyectoGrid} />
      <DrawerContainer {...propsDrawer}>
        {isNewProyecto ? <NewProyectoWrap /> : <InfoProyectoWrap />}
      </DrawerContainer>
    </>
  );
}
