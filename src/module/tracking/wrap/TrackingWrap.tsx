import * as React from "react";
import { ProyectoGridWrap } from "../../proyecto/wrap";
import { ActividadCardsWrap } from "../../actividad/wrap";
import { useTracking } from "../hook";

export default function TrackingWrap() {
  const { isShowActividades } = useTracking();
  return (
    <>{isShowActividades ? <ActividadCardsWrap /> : <ProyectoGridWrap />}</>
  );
}
