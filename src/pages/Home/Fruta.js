import React from "react";
import { Item, Descripcion, TitleFruta, Precio, Car } from "./styles";
import { RiHandbagLine } from "react-icons/ri";

export default function Fruta  (props) {
  return (
    <Item>
      <img src={props.url} />
      <Descripcion>
        <TitleFruta className="negro texto-1linea">{props.name}</TitleFruta>
        <Precio className="texto-1linea">{props.precio}</Precio>
        <Car href="#" className="a-button">
          <RiHandbagLine />
          Al Carrito
        </Car>
      </Descripcion>
    </Item>
  );
};
