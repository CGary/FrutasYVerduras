import * as React from "react";
import { Form, ContainerButton } from "../../../components/styled";
import { getArrayMenuItems } from "../../../components/common";
import { TextField, Button, MenuItem } from "@material-ui/core";

export default function NewActividadView(props) {
  const {
    arrProyecto,
    arrResponsable,
    arrPrioridad,

    proyectoField,
    nombreField,
    responsableField,
    prioridadField,
    descripcionField,
    notificacionField,
    objetivoField,

    proyectoHandle,
    nombreHandle,
    responsableHandle,
    prioridadHandle,
    descripcionHandle,
    notificacionHandle,
    objetivoHandle,

    formHandle,
  } = props;

  const propsOpenNotificaciones = {
    onClick: () => {
      alert("open notifications");
    },
  };

  return (
    <Form {...formHandle}>
      <TextField fullWidth select {...proyectoField} {...proyectoHandle}>
        {getArrayMenuItems(arrProyecto)}
      </TextField>
      <TextField fullWidth {...nombreField} {...nombreHandle} />
      <TextField fullWidth select {...responsableField} {...responsableHandle}>
        {getArrayMenuItems(arrResponsable)}
      </TextField>
      <TextField fullWidth select {...prioridadField} {...prioridadHandle}>
        {getArrayMenuItems(arrPrioridad)}
      </TextField>
      <TextField fullWidth {...descripcionField} {...descripcionHandle} />
      <TextField
        fullWidth
        select
        defaultValue="1"
        label="Estado"
        helperText="Cambie el estado del Proyecto"
      >
        <MenuItem value="1">En Proceso</MenuItem>
        <MenuItem value="2">Vencido</MenuItem>
      </TextField>
      {/* <TextField
        fullWidth
        label="Fecha de Inicio"
        helperText="Fecha de Inicio de la Actividad"
        defaultValue="01/08/2021"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        fullWidth
        label="Fecha Fin"
        helperText="Fecha de Finalización de la Actividad"
        defaultValue="10/08/2021"
        InputProps={{
          readOnly: true,
        }}
      /> */}
      <TextField fullWidth {...notificacionField} {...notificacionHandle} />
      <TextField
        fullWidth
        multiline
        rows={4}
        {...objetivoField}
        {...objetivoHandle}
      />
      <ContainerButton>
        <Button type="submit" variant="contained" color="primary">
          Guardar
        </Button>
        <Button
          variant="contained"
          color="primary"
          {...propsOpenNotificaciones}
        >
          Notificaciones
        </Button>
      </ContainerButton>
    </Form>
  );
}
