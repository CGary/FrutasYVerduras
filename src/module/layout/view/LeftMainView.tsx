import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../images/logo_smp.png";
import { Link as RouterLink } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import styled from "styled-components";

export default function LeftMainView({ onClickBurguerMenu, titleText }) {
  return (
    <Main>
      <Burguer onClick={onClickBurguerMenu}>
        <GiHamburgerMenu size="18px" />
      </Burguer>
      <RouterLink to="/">
        <img src={logo} />
      </RouterLink>
      <Hidden smDown>
        <Text>
          <div className="text1">SMP</div>
          <div className="text2">Sistema de Monitoreo de Producción</div>
        </Text>
        <TitleBig>{titleText}</TitleBig>
      </Hidden>
      <Hidden mdUp>
        <TitleSmall>{titleText}</TitleSmall>
      </Hidden>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  /* 50+12=62 */
  a {
    display: grid;
    align-items: center;
    justify-items: center;
    padding-left: 12px;
  }
  img {
    height: 50px;
    width: 50px;
  }
`;

const Burguer = styled.div`
  height: 100%;
  width: 37px;
  background-color: #37393e;
  color: white;
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
`;

const Text = styled.div`
  width: 156px;
  padding: 0 20px 0 7px;
  height: 100%;
  display: grid;
  align-content: center;
  gap: 5px;
  /* color: #aabbbb; */
  color: #e5e5e5;
  .text1 {
    font-size: 18px;
  }
  .text2 {
    font-size: 12px;
    margin-right: 10px;
  }
`;
const TitleBig = styled.div`
  margin-left: 20px;
  font-size: 25px;
  color: #e5e5e5;
  display: grid;
  align-items: center;
`;

const TitleSmall = styled.div`
  margin-left: 20px;
  font-size: 21px;
  color: #e5e5e5;
  display: grid;
  align-items: center;
`;
