import styled from "styled-components";
import { ContentBase } from "../../styles/commonStyles";

export const Main = styled(ContentBase)`
  height: 100vh;
`;

export const Contenedor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--vl-gap);
  padding: 0 var(--vl-borde-ext);
  width: calc(100vw - (2 * var(--vl-borde-ext)));

  img {
    width: 100%;
    height: calc(
      (
          100vw -
            (
              (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 2) +
                (var(--vl-gap) * (2 - 1))
            )
        ) / 2
    );
    object-fit: cover;
    border-radius: 7px;
  }
  .home-destacado {
    grid-column-end: span 2;
  }
  @media (min-width: 320px) {
    grid-template-columns: repeat(3, 1fr);
    img {
      height: calc(
        (
            100vw -
              (
                (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 3) +
                  (var(--vl-gap) * (3 - 1))
              )
          ) / 3
      );
    }
    .home-destacado {
      grid-column-end: span 3;
    }
  }
  @media (min-width: 420px) {
    grid-template-columns: repeat(4, 1fr);
    img {
      height: calc(
        (
            100vw -
              (
                (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 4) +
                  (var(--vl-gap) * (4 - 1))
              )
          ) / 4
      );
    }
    .home-destacado {
      grid-column-end: span 4;
    }
  }
  @media (min-width: 568px) {
    grid-template-columns: repeat(5, 1fr);
    img {
      height: calc(
        (
            100vw -
              (
                (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 5) +
                  (var(--vl-gap) * (5 - 1))
              )
          ) / 5
      );
    }
    .home-destacado {
      grid-column-end: span 5;
    }
  }
  @media (min-width: 812px) {
    grid-template-columns: repeat(6, 1fr);
    img {
      height: calc(
        (
            100vw -
              (
                (2 * var(--vl-borde-ext)) + ((2 * var(--vl-borde-caja)) * 6) +
                  (var(--vl-gap) * (6 - 1))
              )
          ) / 6
      );
    }
    .home-destacado {
      grid-column-end: span 6;
    }
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const TitleDestacado = styled.div`
  grid-column-start: 1;
  display: flex;
  align-items: center;
  font-size: var(--title1);
  height: 25px;
  padding-top: var(--vl-borde-caja);
`;

export const Fruta = styled.div`
  background-color: white;
  border-radius: var(--vl-border-radius);
  padding: var(--vl-borde-caja);
`;

export const Descripcion = styled.div`
  font-size: var(--normal);
  display: grid;
  /* grid-template-rows: 33px 14px 16px; */
  align-items: center;
`;

export const TitleFruta = styled.div`
  align-self: start;
  font-size: var(--title2);
`;

export const Precio = styled.div`
  align-self: center;
  font-size: var(--normal);
`;

export const Car = styled.a`
  font-size: var(--chica);
  letter-spacing: var(--vl-space-chica);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  svg {
    font-size: 16px;
    margin-right: 4px;
  }
`;