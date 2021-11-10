import * as React from "react";
import { Form, ContainerButton } from "../../../components/styled";
import { getArrayMenuItems } from "../../../components/common";
import { TextField, Button } from "@material-ui/core";

export default function NewProyectoView(props) {
  const {
    arrResponsable,
    arrPrioridad,
    nombreHandle,
    responsableHandle,
    prioridadHandle,
    descripcionHandle,
    nombreField,
    responsableField,
    prioridadField,
    descripcionField,
    formHandle,
  } = props;

  return (
    <Form {...formHandle}>
      <TextField fullWidth {...nombreField} {...nombreHandle} />
      <TextField fullWidth select {...responsableField} {...responsableHandle}>
        {getArrayMenuItems(arrResponsable)}
      </TextField>
      <TextField fullWidth select {...prioridadField} {...prioridadHandle}>
        {getArrayMenuItems(arrPrioridad)}
      </TextField>
      <TextField fullWidth {...descripcionField} {...descripcionHandle} />
      <ContainerButton>
        <Button type="submit" variant="contained" color="primary">
          Guardar
        </Button>
      </ContainerButton>
    </Form>
  );
}
