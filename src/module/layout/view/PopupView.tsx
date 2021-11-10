import * as React from "react";
import { Card, CardContent, Divider } from "@material-ui/core";
import logo from "../../../images/LogoAndina.png";
import { IoMdMail } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { MdSmartphone } from "react-icons/md";
import styled from "styled-components";

export default function PopupView() {
  return (
    <Card>
      <CardContent>
        <Main>
          <div className="imagen span3">
            <img src={logo} />
          </div>

          <div>Usuario Conectado:</div>
          <div style={{ fontSize: "15px" }}>VideoWall</div>
          <Divider className="span3" />

          <div>Daniel Jimenez</div>
          <div className="right-align">+591 (3)371-3526</div>
          <ImPhone />
          <div className="right right-align">+591 7131-3072</div>
          <MdSmartphone />
          <div className="span2 right-align">
            daniel.jimenez@ypfb-andina.com.bo
          </div>
          <IoMdMail />
          <Divider className="span3" />

          <div>Ivana Candy</div>
          <div className="right-align">+591 (3)371-3027</div>
          <ImPhone />
          <div className="right right-align">+591 7495-8017</div>
          <MdSmartphone />
          <div className="span2 right-align">
            ivana.candy@servexternos.ypfb-andina.com.bo
          </div>
          <IoMdMail />
        </Main>
      </CardContent>
    </Card>
  );
}

const Main = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 17px;
  align-items: center;
  row-gap: 16px;
  column-gap: 8px;
  font-size: 12px;
  img {
    height: 63px;
  }
  svg {
    font-size: 17px;
    color: gray;
  }

  .imagen {
    display: grid;
    justify-content: center;
  }

  .span2 {
    grid-column-start: 1;
    grid-column-end: span 2;
  }

  .span3 {
    grid-column-start: 1;
    grid-column-end: span 3;
  }

  .right {
    grid-column-start: 2;
    grid-column-end: 2;
  }

  .right-align {
    text-align: right;
  }
`;

// const LeftItem = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
// `;
