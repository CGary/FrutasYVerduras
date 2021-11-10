import * as React from "react";
import { Hidden } from "@material-ui/core";

export default function NavBarDesktopView({ children, isNavBarOpen }) {
  return (
    <Hidden smDown>
      {isNavBarOpen && (
        <DrawerDesktop anchor="left" open variant="persistent">
          {children}
        </DrawerDesktop>
      )}
    </Hidden>
  );
}

import styled from "styled-components";
import { Drawer } from "@material-ui/core";
const DrawerDesktop = styled(Drawer)`
  .MuiDrawer-paper {
    width: 255px;
    top: 63px;
    height: calc(100vh - 63px);
    background-color: #37393e;
  }
`;
