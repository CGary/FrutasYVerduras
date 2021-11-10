import * as React from "react";
import { EditProyectoWrap } from ".";
import { Graphic, TabInfo, TicketHeader } from "../../../components/common";
import { DataCard } from "../../../components/common";
import { useGraphicData } from "../hook";

export default function InfoTareaWrap() {
  const { graphicProyectoProps, ticketHeaderProps, dataCardProps } =
    useGraphicData();

  return (
    <>
      <TicketHeader {...ticketHeaderProps} />
      <TabInfo
        name="Proyecto"
        child0={
          <>
            <Graphic {...graphicProyectoProps} />
            <DataCard {...dataCardProps} />
          </>
        }
        child1={<EditProyectoWrap />}
      />
    </>
  );
}
