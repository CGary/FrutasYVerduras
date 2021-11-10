import * as React from "react";
import { NewActividadView } from "../view";
import { LoadingPage, TicketHeader } from "../../../components/common";
import { useActividadHandler, useActividadCrud } from "../hook";
import { useActividadInitData, useActividadClean } from "../hook";

export default function NewActividadWrap() {
  const handlerProps = useActividadHandler();
  const crudProps = useActividadCrud();
  const { isInitData, ...initDataProps } = useActividadInitData();
  useActividadClean();

  const ticketHeaderProps = {
    name: "Nueva Actividad",
    handleCloseTicketHeader: () => {
      alert("close header");
    },
  };

  return isInitData ? (
    <>
      <TicketHeader {...ticketHeaderProps} />
      <NewActividadView {...handlerProps} {...crudProps} {...initDataProps} />
    </>
  ) : (
    <LoadingPage />
  );
}
