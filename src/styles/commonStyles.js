import styled from "styled-components";

export const ContentBase = styled.div`
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
