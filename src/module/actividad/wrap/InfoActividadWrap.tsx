import * as React from "react";
import { EditActividadWrap } from ".";
import { Graphic, TabInfo, TicketHeader } from "../../../components/common";
import { DataCard } from "../../../components/common";
import { useGraphicData } from "../hook";

export default function InfoTareaWrap() {
  const { graphicTareaProps, ticketHeaderProps, dataCardProps } =
    useGraphicData();

  return (
    <>
      <TicketHeader {...ticketHeaderProps} />
      <TabInfo
        name="Actividad"
        child0={
          <>
            <Graphic {...graphicTareaProps} />
            <DataCard {...dataCardProps} />
          </>
        }
        child1={<EditActividadWrap />}
      />
    </>
  );
}
