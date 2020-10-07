import React from "react";
import { GrDeliver } from "react-icons/gr";
import { Main, Title, Text } from "./styles";
import { connect } from "react-redux";
import { cambiarNombre } from "../../actions/loginActions";

const Delivery = (props) => {
  return (
    <Main>
      <GrDeliver
        className="delivery-svg"
        onClick={() => props.cambiarNombre("Pepe Alimentos")}
      />
      <Title>Envíos a Domicilio</Title>
      <Text>Cumpliendo con todas las normas de bioseguridad</Text>
    </Main>
  );
};

export default connect(null, { cambiarNombre })(Delivery);
