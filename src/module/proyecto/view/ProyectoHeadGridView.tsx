import * as React from "react";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import { MdSearch } from "react-icons/md";
import { SubHeader } from "../../../components/common";
import { SubTitle } from "../../../components/styled";

export default function ProyectoHeadGridView(props) {
  const { propsNuevo, propsBuscar } = props;
  return (
    <SubHeader
      left={<SubTitle>Todos los Proyectos</SubTitle>}
      right={
        <>
          <Button
            variant="contained"
            component="span"
            color="primary"
            size="small"
            {...propsNuevo}
          >
            Nuevo
          </Button>
          <TextField
            className="head-textbox"
            label="Buscar"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <MdSearch size="20px" />
                </InputAdornment>
              ),
            }}
            {...propsBuscar}
          />
        </>
      }
    />
  );
}
