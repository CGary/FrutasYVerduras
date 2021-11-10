import * as React from "react";
import { NewProyectoView } from "../view";
import { LoadingPage, TicketHeader } from "../../../components/common";
import { useProyectoInitData, useProyectoHandler } from "../hook";
import { useProyectoCrud, useProyectoClean } from "../hook";

export default function NewProyectoWrap() {
  const { isInitData, ...initDataProps } = useProyectoInitData();
  const handlerProps = useProyectoHandler();
  const CrudProps = useProyectoCrud();
  useProyectoClean();

  const ticketHeaderProps = {
    name: "Nuevo Proyecto",
    handleCloseTicketHeader: () => {
      alert("close header");
    },
  };

  return isInitData ? (
    <>
      <TicketHeader {...ticketHeaderProps} />
      <NewProyectoView {...initDataProps} {...handlerProps} {...CrudProps} />
    </>
  ) : (
    <LoadingPage />
  );
}
