import React from "react";
import { RiMenuLine, RiShoppingCartLine, RiSearch2Line } from "react-icons/ri";
import { Main, Anchor, Logo } from "./styles";

export default function Head() {
  return (
    <Main>
      <Anchor href="#">
        <RiMenuLine />
      </Anchor>
      <Logo>{process.env.TITLE}</Logo>
      <RiSearch2Line />
      <RiShoppingCartLine className="head-rigth" />
    </Main>
  );
}
