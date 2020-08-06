import React from "react";
import { GrDeliver } from "react-icons/gr";

export const Delivery = () => {
  return (
    <Main>
      <GrDeliver className="delivery-svg" />
      <Title>Envíos a Domicilio</Title>
      <Text>Cumpliendo con todas las normas de bioseguridad</Text>
    </Main>
  );
};

import styled from "styled-components";

const Main = styled.div`
  font-size: var(--normal);
  width: calc(100vw - (2 * var(--vl-borde-ext)));
  margin: var(--vl-borde-caja) var(--vl-borde-ext);
  display: grid;
  grid-template-columns: 35px auto;
  /* grid-template-rows: 35px; */
  align-items: center;
  justify-items: start;
  .delivery-svg {
    grid-row-start: 1;
    grid-row-end: span 2;
  }
`;

const Title = styled.div`
  font-size: var(--title2);
  color: var(--cr-negro);
`;
const Text = styled.div`
  font-size: var(--chica);
  letter-spacing: var(--vl-space-chica);
`;
