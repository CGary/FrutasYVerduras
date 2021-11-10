import * as React from "react";
import styled from "styled-components";
import { CardContent, Divider, IconButton } from "@material-ui/core";
import { Card, List, CardHeader, Tooltip } from "@material-ui/core";
import { Progress, DataCard } from "../../../components/common";
import { MdAddCircleOutline, MdEdit } from "react-icons/md";
import { TareaCardView } from "../../tarea/view";

export default function ActividadMainCardView(props) {
  const {
    cdActividad,
    nombre,
    estado,
    responsable,
    retraso,
    avance,
    porcentajeTiempo,
    colorProgress,
    arrTarea,
    handleNewTarea,
    handleEditTarea,
    handleEditActividad,
  } = props;
  const handleClickEditActividad = () => {
    handleEditActividad(cdActividad);
  };

  const dataCardProps = {
    arrItems: [
      { title: "Estado:", body: estado },
      { body: responsable },
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
    <MainCard variant="outlined">
      <CardHeader
        style={{ paddingBottom: 0, backgroundColor: "#F4F7FA" }}
        action={
          <>
            <Tooltip title="Ver Actividad">
              <IconButton size="small" onClick={handleClickEditActividad}>
                <MdEdit size="22px" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Nueva Tarea">
              <IconButton size="small" onClick={handleNewTarea}>
                <MdAddCircleOutline size="22px" />
              </IconButton>
            </Tooltip>
          </>
        }
        title={<div style={{ fontSize: 15, fontWeight: 700 }}>{nombre}</div>}
        subheader={<DataCard {...dataCardProps} />}
      />
      <CardContent style={{ paddingBottom: 0, paddingTop: 0 }}>
        <List component="div">
          {arrTarea?.map((tareaProps, index) => (
            <React.Fragment key={"tarea-card-" + tareaProps.cdTarea}>
              <Divider />
              <TareaCardView
                {...tareaProps}
                {...{ handleEditTarea }}
                index={index + 1}
              />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </MainCard>
  );
}
const MainCard = styled(Card)`
  flex: 0 0 280px;
  .MuiTypography-body1 {
    line-height: normal;
    letter-spacing: normal;
    padding-top: 6px;
  }
`;
