import * as React from "react";
import { Button, TextField, IconButton } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { SubHeader, getArrayMenuItems } from "../../../components/common";
import { SubTitle } from "../../../components/styled";
import { MdArrowBack, MdHighlightOff } from "react-icons/md";

export default function ActividadHeadView(props) {
  const {
    name,
    handleNewActividad,
    goBack,
    responsableHandle,
    prioridadHandle,
    arrResponsable,
    arrPrioridad,
    handleClearResponsable,
    handleClearPrioridad,
  } = props;
  return (
    <SubHeader
      left={
        <>
          <IconButton size="small" onClick={goBack}>
            <MdArrowBack
              size="22px"
              style={{ color: "#2387de", cursor: "pointer" }}
            />
          </IconButton>
          <div>
            <Button size="small" onClick={goBack}>
              <SubTitle>Proyecto </SubTitle>
            </Button>
            <SubTitle>{"/ " + name}</SubTitle>
          </div>
        </>
      }
      right={
        <>
          <Button
            variant="contained"
            component="span"
            color="primary"
            size="small"
            onClick={handleNewActividad}
          >
            Nueva Actividad
          </Button>
          <TextField
            className="head-textbox"
            size="small"
            select
            label="Responsable"
            helperText="Elige el reponsable de la tarea"
            InputProps={{
              startAdornment: !!responsableHandle?.value && (
                <InputAdornment position="start">
                  <IconButton onClick={handleClearResponsable}>
                    <MdHighlightOff size="20px" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...responsableHandle}
          >
            {getArrayMenuItems(arrResponsable)}
          </TextField>
          <TextField
            className="head-textbox"
            size="small"
            select
            label="Prioridad"
            helperText="Elige la prioridad de la tarea"
            InputProps={{
              startAdornment: !!prioridadHandle.value && (
                <InputAdornment position="start">
                  <IconButton onClick={handleClearPrioridad}>
                    <MdHighlightOff size="20px" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...prioridadHandle}
          >
            {getArrayMenuItems(arrPrioridad)}
          </TextField>
        </>
      }
    />
  );
}
