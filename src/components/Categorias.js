import React from "react";
import { Link } from "react-router-dom";

export const Categorias = () => {
  return (
    <Main>
      <Container>
        <Categ>Categorías</Categ>
        <Link to="/categorias" className="categorias-row a-button">
          Frutas
        </Link>
        <Link to="/categorias" className="categorias-row a-button">
          Verduras
        </Link>
        <Link to="/categorias" className="categorias-row a-button">
          Legumbres
        </Link>
        <Link to="/categorias" className="categorias-row a-button">
          Hortalizas
        </Link>
      </Container>
    </Main>
  );
};

import styled from "styled-components";

const Main = styled.div`
  background-color: white;
  padding: var(--vl-borde-ext);
`;

const Container = styled.div`
  border-radius: var(--vl-border-radius);
  border: solid 1px var(--cr-borde);
  display: grid;
  grid-template-rows: repeat(5, 30px);
  .categorias-row {
    margin-left: var(--vl-borde-caja);
    margin-right: var(--vl-borde-caja);
    display: flex;
    align-items: center;
    font-size: var(--normal);
    letter-spacing: var(--vl-space-normal);
    border-bottom: solid 1px var(--cr-borde);
  }
  a:last-child {
    border: none;
  }
`;

const Categ = styled.div`
  font-size: var(--title2);
  letter-spacing: var(--vl-space-normal);
  color: var(--cr-negro);
  background-color: var(--cr-fondo);
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: var(--vl-borde-caja);
  border-bottom: solid 1px var(--cr-borde);
  border-top-left-radius: var(--vl-borde-caja);
  border-top-right-radius: var(--vl-borde-caja);
`;
