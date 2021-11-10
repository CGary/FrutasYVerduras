import * as React from "react";
import { ActividadMainCardView } from ".";
import styled from "styled-components";

export default function ActividadCardsView(props) {
  // eslint-disable-next-line
  const { arrActividad, nombre, ...rest } = props;
  return (
    <Main>
      {arrActividad?.map((actividadProps) => (
        <ActividadMainCardView
          key={"actividad-card-" + actividadProps.cdActividad}
          {...actividadProps}
          {...rest}
        />
      ))}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  column-gap: 8px;
  overflow: auto;
  padding-left: 8px;
`;
