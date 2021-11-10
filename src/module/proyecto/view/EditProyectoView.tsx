import * as React from "react";
import { Form, ContainerButton, SubTitle } from "../../../components/styled";
import { getArrayMenuItems } from "../../../components/common";
import { TextField, Button, MenuItem } from "@material-ui/core";

export default function EditProyectoView(props) {
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
    deleteHandle,
  } = props;

  return (
    <Form {...formHandle}>
      <SubTitle>Editar Proyecto</SubTitle>
      <TextField fullWidth {...nombreHandle} {...nombreField} />
      <TextField fullWidth select {...responsableHandle} {...responsableField}>
        {getArrayMenuItems(arrResponsable)}
      </TextField>
      <TextField fullWidth select {...prioridadHandle} {...prioridadField}>
        {getArrayMenuItems(arrPrioridad)}
      </TextField>
      <TextField fullWidth {...descripcionHandle} {...descripcionField} />
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
        helperText="Fecha de Inicio del Proyecto"
        defaultValue="01/08/2021"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        fullWidth
        label="Fecha Fin"
        helperText="Fecha de Finalización del Proyecto"
        defaultValue="10/08/2021"
        InputProps={{
          readOnly: true,
        }}
      /> */}
      <ContainerButton>
        <Button type="submit" variant="contained" color="primary">
          Guardar
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
