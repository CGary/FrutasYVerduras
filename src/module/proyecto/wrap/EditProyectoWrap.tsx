import * as React from "react";
import { EditProyectoView } from "../view";
import { LoadingPage } from "../../../components/common";
import { useProyectoInitData, useProyectoHandler } from "../hook";
import { useProyectoCrud, useProyectoLoad } from "../hook";

export default function EditProyectoWrap() {
  const { isInitData, ...initDataProps } = useProyectoInitData();
  const handlerProps = useProyectoHandler();
  const crudProps = useProyectoCrud();
  const { isLoad } = useProyectoLoad();

  return isInitData && isLoad ? (
    <EditProyectoView {...initDataProps} {...handlerProps} {...crudProps} />
  ) : (
    <LoadingPage />
  );
}
