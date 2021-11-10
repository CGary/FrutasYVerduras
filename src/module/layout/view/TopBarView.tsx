import * as React from "react";

import styled from "styled-components";

export default function TopBarView({ leftMain, rightMain }) {
  return (
    <Main>
      {leftMain}
      {rightMain}
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
  height: 63px;
  background-color: #2387de;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
