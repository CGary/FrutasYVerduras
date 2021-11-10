import * as React from "react";
import { SubTitle } from "../styled";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export default function TicketHeader({ name, handleCloseTicketHeader }) {
  return (
    <Main>
      <SubTitle>{name}</SubTitle>
      <MdClose size="22px" onClick={handleCloseTicketHeader} />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: auto 22px;
  padding: 16px;
  svg {
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
  }
`;
