import * as React from "react";
import { TopBarView } from "../view";
import { LeftMainView, RightMainView, PopupView } from "../view";
import { emitter, burguerEvent } from "../../../tools";

export default function TopBar() {
  const propsLeftMainView = {
    onClickBurguerMenu: () => {
      emitter.emit(burguerEvent);
    },
    titleText: "Control de Gestión",
  };
  return (
    <TopBarView
      leftMain={<LeftMainView {...propsLeftMainView} />}
      rightMain={<RightMainView popup={<PopupView />} />}
    />
  );
}
