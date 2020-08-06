import { createGlobalStyle } from "styled-components";
import Roboto from "../fonts/Roboto-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
  :root {
    --cr-fondo: #f2f2f2;
    --cr-fuente: #666;
    --cr-negro: #333;
    --cr-borde: #cbcbcb;
    --vl-borde-ext: 10px;
    --vl-borde-caja: 7px;
    --vl-border-radius: 7px;
    --vl-gap: 7px;
    --vl-space-chica: 0.7px;
    --vl-space-normal: 0.8px;
    --title1: 16px;
    --title2: 14px;
    --normal: 12px;
    --chica: 10px;
  }

  @font-face {
    font-family: Roboto;
    src: url(${Roboto});
  }
  body {
    font-family: Roboto;
    color: var(--cr-fuente);
    background-color: var(--cr-fondo);
    /* font-size: 13px; */
  }
  svg {
    font-size: 24px;
  }

  .negro {
    color: var(--cr-negro);
  }

  .texto-1linea {
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    scrollbar-width: none;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .a-button {
    text-decoration: none;
    color: inherit;
  }
`;
