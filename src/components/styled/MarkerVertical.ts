import styled from "styled-components";

export default styled.span<{ porcentajeTiempo: number }>`
  position: absolute;
  top: -2px;
  left: ${({ porcentajeTiempo }) => porcentajeTiempo}%;
  background-color: #7f7f7f;
  height: 12px;
  width: 1px;
`;
