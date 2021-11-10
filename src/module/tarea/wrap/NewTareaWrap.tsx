import * as React from "react";
import { NewTareaView } from "../view";
import { LoadingPage, TicketHeader } from "../../../components/common";
import { useTareaHandler, useTareaCrud } from "../hook";
import { useTareaInitData, useTareaClean } from "../hook";

export default function NewTareaWrap() {
  const handlerProps = useTareaHandler();
  const crudProps = useTareaCrud();
  const { isInitData, ...initDataProps } = useTareaInitData();
  useTareaClean();

  const ticketHeaderProps = {
    name: "Nueva Tarea",
    handleCloseTicketHeader: () => {
      alert("close header");
    },
  };

  return isInitData ? (
    <>
      <TicketHeader {...ticketHeaderProps} />
      <NewTareaView {...crudProps} {...handlerProps} {...initDataProps} />
    </>
  ) : (
    <LoadingPage />
  );
}
