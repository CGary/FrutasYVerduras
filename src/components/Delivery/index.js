import React from "react";
import { GrDeliver } from "react-icons/gr";
import { Main, Title, Text } from "./styles";
import { StoreContext } from "../../components/Context";

export default function Delivery() {
  const { setState1 } = React.useContext(StoreContext);
  return (
    <Main>
      <GrDeliver
        className="delivery-svg"
        onClick={() => setState1("Cambio Titulo")}
      />
      <Title>Envíos a Domicilio</Title>
      <Text>Cumpliendo con todas las normas de bioseguridad</Text>
    </Main>
  );
}
