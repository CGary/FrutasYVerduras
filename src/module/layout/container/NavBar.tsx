import * as React from "react";
import { NavBarDesktopView, NavBarMobileView } from "../view";
import { NavBarContentView } from "../view";
import { useNavBarOpen } from "../hook";
import json from "./data.json";

export default function NavBar() {
  const { isNavBarOpen, handleCloseNavBar } = useNavBarOpen();

  const propsNavBarContentView = {
    data: json.data,
    onSelectMenuItem: (menuItem) => {
      console.log(menuItem);
    },
  };
  const propsNavBarDesktopView = {
    isNavBarOpen,
  };
  const propsNavBarMobileView = {
    isNavBarOpen,
    handleCloseNavBar,
  };
  return (
    <>
      <NavBarDesktopView {...propsNavBarDesktopView}>
        <NavBarContentView {...propsNavBarContentView} />
      </NavBarDesktopView>
      <NavBarMobileView {...propsNavBarMobileView}>
        <NavBarContentView {...propsNavBarContentView} />
      </NavBarMobileView>
    </>
  );
}
