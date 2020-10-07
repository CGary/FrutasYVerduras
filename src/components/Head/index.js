import React from "react";
import { RiMenuLine, RiShoppingCartLine, RiSearch2Line } from "react-icons/ri";
import { Main, Anchor, Logo } from "./styles";
import { connect } from "react-redux";

const Head = (props) => {
  return (
    <Main>
      <Anchor href="#">
        <RiMenuLine />
      </Anchor>
      <Logo>{props.nombre}</Logo>
      <RiSearch2Line />
      <RiShoppingCartLine className="head-rigth" />
    </Main>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.homeReducer;
};

export default connect(mapStateToProps, null)(Head);
