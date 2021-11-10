import * as React from "react";
import { EditActividadView } from "../view";
import { LoadingPage } from "../../../components/common";
import { useActividadHandler, useActividadCrud } from "../hook";
import { useActividadInitData, useActividadLoad } from "../hook";

export default function EditActividadWrap() {
  const handlerProps = useActividadHandler();
  const crudProps = useActividadCrud();
  const { isInitData, ...initDataProps } = useActividadInitData();
  const { isLoad } = useActividadLoad();
  return isInitData && isLoad ? (
    <EditActividadView {...handlerProps} {...crudProps} {...initDataProps} />
  ) : (
    <LoadingPage />
  );
}
