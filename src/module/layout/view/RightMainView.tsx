import * as React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { Popover, Hidden } from "@material-ui/core";
import styled from "styled-components";

export default function RightMainView({ popup }) {
  const htmlEL = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setAnchorEl(htmlEL?.current);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Main>
      <MdKeyboardArrowDown onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {popup}
      </Popover>
      <CircleButton ref={htmlEL} onClick={handleClick}>
        VI
      </CircleButton>
      <Hidden smDown>
        <div onClick={handleClick} className="contacto">
          Contáctanos
        </div>
        <IoMdMail onClick={handleClick} size="22px" />
      </Hidden>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 8px;
  height: 100%;
  color: white;
  padding-right: 15px;
  svg {
    cursor: pointer;
  }
  .contacto {
    font-size: 12px;
    margin-right: 8px;
    cursor: pointer;
  }
`;
const CircleButton = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #dde3e6;
  }
`;
