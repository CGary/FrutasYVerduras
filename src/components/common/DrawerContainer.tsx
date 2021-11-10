import * as React from "react";
import { Drawer } from "@material-ui/core";
import styled from "styled-components";

export default function DrawerContainer(props) {
  const { children, handleCloseDrawer, isDrawerOpen } = props;
  return (
    <DrawerMobile
      anchor="right"
      onClose={handleCloseDrawer}
      open={isDrawerOpen}
      variant="temporary"
    >
      {children}
    </DrawerMobile>
  );
}

const DrawerMobile = styled(Drawer)`
  .MuiDrawer-paper {
    width: 400px;
  }
`;
