import * as React from "react";
import styled from "styled-components";
import { TopBar, NavBar, Body } from "./container";

export default function MainLayout({ children }) {
  return (
    <Main>
      <TopBar />
      <Body>{children}</Body>
      <NavBar />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-rows: 63px calc(100vh - 63px);
  align-items: start;
`;
