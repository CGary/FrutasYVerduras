import * as React from "react";
import styled from "styled-components";

export default function DrawerContainer({ arrItems, isPadding = false }) {
  const style = { color: "#E85850" };
  return (
    <Main isPadding={isPadding}>
      {arrItems.map(({ reactElement, title, body, isAlert = false }) =>
        !!reactElement ? (
          reactElement
        ) : (
          <Row key={"row"}>
            {!!title && <span>{title}</span>}
            <span {...(isAlert ? style : {})}>{body}</span>
          </Row>
        )
      )}
    </Main>
  );
}

const Main = styled.span<{ isPadding: boolean }>`
  display: grid;
  grid-template-columns: auto;
  row-gap: 6px;
  align-items: start;
  ${({ isPadding }) => isPadding && "padding: 16px;"}
`;

const Row = styled.span`
  font-size: 13px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 4px;
  padding-bottom: 4px;
  color: rgba(0, 0, 0, 0.54);
`;
