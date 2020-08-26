import React from "react";
import { Link } from "react-router-dom";
import {Main, Container, Categ} from "./styles"

export default function Categorias() {
  return (
    <Main>
      <Container>
        <Categ>Categorías</Categ>
        <Link to="/categorias" className="categorias-row a-button">
          Frutas
        </Link>
        <Link to="/categorias" className="categorias-row a-button">
          Verduras
        </Link>
        <Link to="/categorias" className="categorias-row a-button">
          Legumbres
        </Link>
        <Link to="/categorias" className="categorias-row a-button">
          Hortalizas
        </Link>
      </Container>
    </Main>
  );
}