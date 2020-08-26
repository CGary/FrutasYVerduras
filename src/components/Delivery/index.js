import React from "react";
import { GrDeliver } from "react-icons/gr";
import {Main, Title, Text} from "./styles"

export default function Delivery() {
  return (
    <Main>
      <GrDeliver className="delivery-svg" />
      <Title>Envíos a Domicilio</Title>
      <Text>Cumpliendo con todas las normas de bioseguridad</Text>
    </Main>
  );
}

