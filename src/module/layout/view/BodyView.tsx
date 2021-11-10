import * as React from "react";
import styled, { css } from "styled-components";

export default function BodyView({ children, isNavBarOpen }) {
  return (
    <Wrapper isNavBarOpen={isNavBarOpen}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const mediaQuery = css`
  @media (min-width: 960px) {
    padding-left: 255px;
  }
`;

const Wrapper = styled.div<{ isNavBarOpen: boolean }>`
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  height: 100%;
  ${({ isNavBarOpen }) => (isNavBarOpen ? mediaQuery : "")}
`;

const Content = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  height: 100%;
`;
