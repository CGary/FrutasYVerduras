import * as React from "react";
import { ListItemText, ListItem } from "@material-ui/core";
import { Progress, DataCard } from "../../../components/common";
import styled from "styled-components";

export default function TareaCardView(props) {
  const {
    cdTarea,
    nombre,
    estado,
    responsable,
    fin,
    prioridad,
    retraso,
    avance,
    porcentajeTiempo = 50,
    colorProgress = 0,
    index,
    handleEditTarea,
  } = props;

  const handleClickEditTarea = () => {
    handleEditTarea(cdTarea);
  };

  const dataCardProps = {
    arrItems: [
      { title: "Estado:", body: estado },
      { body: responsable },
      { title: "fin:", body: fin },
      { title: "Prioridad:", body: prioridad },
      { title: "Avance:", body: avance + "%", isAlert: false },
      {
        reactElement: (
          <Progress {...{ avance, porcentajeTiempo, colorProgress }} />
        ),
      },
    ],
  };

  !!retraso &&
    dataCardProps.arrItems.push({
      title: "Retraso:",
      body: retraso + " días",
      isAlert: true,
    });

  return (
    <ListItem button onClick={handleClickEditTarea}>
      <ListItemTextStyled
        primary={<TextList>{nombre}</TextList>}
        secondary={
          <DataCard {...dataCardProps} />
          // <React.Fragment>
          //   {!!estado && (
          //     <MainSec>
          //       <span>Estado:</span>
          //       <span>{estado}</span>
          //     </MainSec>
          //   )}
          //   {!!responsable && (
          //     <MainSec>
          //       <span>{responsable}</span>
          //     </MainSec>
          //   )}
          //   {!!fin && (
          //     <MainSec>
          //       <span>Fin:</span>
          //       <span>{fin}</span>
          //     </MainSec>
          //   )}
          //   {!!prioridad && (
          //     <MainSec>
          //       <span>Prioridad:</span>
          //       <span>{prioridad}</span>
          //     </MainSec>
          //   )}
          //   <MainSec>
          //     <span>Avance:</span>
          //     <span>{avance + "%"}</span>
          //   </MainSec>
          //   <Progress {...{ avance, porcentajeTiempo, colorProgress }} />
          //   {!!retraso && (
          //     <MainSec>
          //       <span>Retraso:</span>
          //       <span style={{ color: "#E85850" }}>{retraso} días</span>
          //     </MainSec>
          //   )}
          // </React.Fragment>
        }
      />
      <Line index={index} />
    </ListItem>
  );
}

const ListItemTextStyled = styled(ListItemText)`
  .MuiTypography-body2 {
    line-height: normal;
    letter-spacing: normal;
    padding-top: 6px;
  }
`;

const TextList = styled.div`
  font-size: 15px;
`;

const color = ["#2B91E0", "#E85850", "#896AE0", "#FFAE00"];

const Line = styled.div<{ index: number }>`
  position: absolute;
  height: 100%;
  width: 2px;
  left: 0px;
  background-color: ${({ index }) => color[index % 4]};
`;
