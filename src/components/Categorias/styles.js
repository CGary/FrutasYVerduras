import styled from "styled-components";

export const Main = styled.div`
  background-color: white;
  padding: var(--vl-borde-ext);
`;

export const Container = styled.div`
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

export const Categ = styled.div`
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
