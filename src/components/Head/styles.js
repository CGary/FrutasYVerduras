import styled from "styled-components";

export const Main = styled.div`
  width: calc(100vw - (2 * var(--vl-borde-ext)));
  padding: var(--vl-borde-caja) var(--vl-borde-ext);
  background-color: white;
  display: grid;
  grid-template-columns: 35px auto repeat(2, 29px);
  /* grid-template-rows: 29px; */
  align-items: center;
  justify-items: start;
  .head-rigth {
    justify-self: end;
  }
`;

export const Anchor = styled.a`
  color: inherit;
  text-transform: none;
`;

export const Logo = styled.div`
  font-size: var(--title1);
  color: var(--cr-negro);
`;
