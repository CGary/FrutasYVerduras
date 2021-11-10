import * as React from "react";
import { MarkerVertical, StyledProgress } from "../styled";
import styled from "styled-components";

export default function Progress({
  avance,
  porcentajeTiempo,
  colorProgress,
  isShowText = false,
}) {
  return (
    <Main isShowText={isShowText}>
      <StyledProgress
        variant="determinate"
        style={{ height: "8px" }}
        value={avance}
        colorProgress={colorProgress}
      />
      <MarkerVertical porcentajeTiempo={porcentajeTiempo} />
      {isShowText && <Text>{avance}%</Text>}
    </Main>
  );
}

const Main = styled.div<{ isShowText: boolean }>`
  position: relative;
  width: 100%;
  ${({ isShowText }) => isShowText && "margin-top: 15px;"}
`;

const Text = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 13px;
`;
