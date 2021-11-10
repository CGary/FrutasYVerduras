import * as React from "react";
import { EditTareaView } from "../view";
import { LoadingPage } from "../../../components/common";
import { useTareaHandler, useTareaCrud } from "../hook";
import { useTareaInitData, useTareaLoad } from "../hook";

export default function EditTareaWrap() {
  const { isInitData, ...initDataProps } = useTareaInitData();
  const handlerProps = useTareaHandler();
  const crudProps = useTareaCrud();
  const { isLoad } = useTareaLoad();

  return isInitData && isLoad ? (
    <EditTareaView {...crudProps} {...handlerProps} {...initDataProps} />
  ) : (
    <LoadingPage />
  );
}
