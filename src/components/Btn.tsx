import React from "react";
import styled from "styled-components";

interface IBtnProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  top?: string;
  onClick?: (a: any) => void;
  bgcolor?: string;
  color?: string;
}

const BtnBox = styled.button<IBtnProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.top};
  border-radius: 12px;
  background-color: ${(props) => props.bgcolor};
  border: solid 2px #212529;
  color: ${(props) => props.color};
  font-size: 32px;
  font-weight: bold;
  div {
    position: absolute;
    top: 8px;
    left: -2px;
    border-radius: 12px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: #212529;
    z-index: -1;
  }
`;

function Btn({
  children,
  width = "335px",
  height = "74px",
  color = "#FFFFFF",
  bgcolor = "#4757FF",
  top = "none",
  onClick,
}: IBtnProps) {
  return (
    <BtnBox
      onClick={onClick}
      color={color}
      bgcolor={bgcolor}
      width={width}
      height={height}
      top={top}
    >
      {children}
      <div></div>
    </BtnBox>
  );
}

export default Btn;
