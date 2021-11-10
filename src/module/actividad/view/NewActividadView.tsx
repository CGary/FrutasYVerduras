import * as React from "react";
import { Form, ContainerButton } from "../../../components/styled";
import { getArrayMenuItems } from "../../../components/common";
import { TextField, Button } from "@material-ui/core";

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
    objetoField,

    proyectoHandle,
    nombreHandle,
    responsableHandle,
    prioridadHandle,
    descripcionHandle,
    notificacionHandle,
    objetivoHandle,

    formHandle,
    deleteHandle,
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
      <TextField fullWidth {...notificacionField} {...notificacionHandle} />
      <TextField
        fullWidth
        multiline
        rows={4}
        {...objetoField}
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
        <Button
          variant="contained"
          component="span"
          color="secondary"
          {...deleteHandle}
        >
          Eliminar
        </Button>
      </ContainerButton>
    </Form>
  );
}
