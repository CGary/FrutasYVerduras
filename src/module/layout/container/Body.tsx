import * as React from "react";
import { BodyView } from "../view";
import { useSelector } from "react-redux";

export default function Body({ children }) {
  const isNavBarOpen = useSelector(
    (state: any) => state.layoutReducer?.isNavBarOpen
  );

  const propsBodyView = {
    isNavBarOpen,
    children,
  };
  return <BodyView {...propsBodyView} />;
}
