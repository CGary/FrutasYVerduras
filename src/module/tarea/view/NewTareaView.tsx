import * as React from "react";
import { Form, ContainerButton } from "../../../components/styled";
import { getArrayMenuItems } from "../../../components/common";
import { TextField, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";

export default function NewTareaView(props) {
  const {
    arrActividad,
    arrResponsable,
    arrUnidad,
    arrPrioridad,

    actividadField,
    nombreField,
    responsableField,
    unidadField,
    prioridadField,
    descripcionField,
    inicioField,
    finField,
    notificacionField,
    objetivoField,

    actividadHandle,
    nombreHandle,
    responsableHandle,
    unidadHandle,
    prioridadHandle,
    descripcionHandle,
    inicioHandle,
    finHandle,
    notificacionHandle,
    objetivoHandle,

    formHandle,
  } = props;

  const handleChangeFile = (e) => {
    console.log(e);
  };

  const propsOpenNotificaciones = {
    onClick: () => {
      alert("notifcaciones");
    },
  };

  return (
    <Form {...formHandle}>
      <TextField fullWidth select {...actividadField} {...actividadHandle}>
        {getArrayMenuItems(arrActividad)}
      </TextField>
      <TextField fullWidth {...nombreField} {...nombreHandle} />
      <TextField fullWidth select {...responsableField} {...responsableHandle}>
        {getArrayMenuItems(arrResponsable)}
      </TextField>
      <TextField fullWidth select {...unidadField} {...unidadHandle}>
        {getArrayMenuItems(arrUnidad)}
      </TextField>
      <TextField fullWidth select {...prioridadField} {...prioridadHandle}>
        {getArrayMenuItems(arrPrioridad)}
      </TextField>
      <TextField fullWidth {...descripcionField} {...descripcionHandle} />
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <KeyboardDatePicker
          fullWidth
          format="dd/MM/yyyy"
          {...inicioField}
          {...inicioHandle}
        />
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <KeyboardDatePicker
          fullWidth
          format="dd/MM/yyyy"
          {...finField}
          {...finHandle}
        />
      </MuiPickersUtilsProvider>
      <TextField fullWidth {...notificacionField} {...notificacionHandle} />
      <TextField
        fullWidth
        multiline
        rows={4}
        {...objetivoField}
        {...objetivoHandle}
      />
      <ContainerButton>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ flex: "0 0 auto" }}
        >
          Guardar
        </Button>
        <Button
          variant="contained"
          component="span"
          color="primary"
          style={{ flex: "0 0 auto" }}
          {...propsOpenNotificaciones}
        >
          Notificaciones
        </Button>
        <React.Fragment>
          <input
            accept="*"
            type="file"
            multiple
            id="icon-button-file"
            onChange={handleChangeFile}
            style={{ display: "none" }}
          />
          <label htmlFor="icon-button-file" style={{ flex: "0 0 auto" }}>
            <Button variant="contained" component="span" color="primary">
              Cargar Archivos
            </Button>
          </label>
        </React.Fragment>
      </ContainerButton>
    </Form>
  );
}
