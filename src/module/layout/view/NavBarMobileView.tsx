import * as React from "react";
import { Hidden } from "@material-ui/core";

export default function NavBarMobileView(props) {
  const { children, handleCloseNavBar, isNavBarOpen } = props;
  return (
    <Hidden mdUp>
      <DrawerMobile
        anchor="left"
        onClose={handleCloseNavBar}
        open={isNavBarOpen}
        variant="temporary"
      >
        {children}
      </DrawerMobile>
    </Hidden>
  );
}

import styled from "styled-components";
import { Drawer } from "@material-ui/core";
const DrawerMobile = styled(Drawer)`
  .MuiDrawer-paper {
    width: 255px;
    top: 63px;
    height: calc(100vh - 63px);
    background-color: #37393e;
  }
`;
