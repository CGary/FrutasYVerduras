import * as React from "react";
import styled from "styled-components";

export default function SubHeader({ left, right }) {
  return (
    <Main>
      <Left>{left}</Left>
      <Right>{right}</Right>
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 16px;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  column-gap: 20px;
  .head-textbox {
    label {
      font-size: 15px;
    }
  }
`;
