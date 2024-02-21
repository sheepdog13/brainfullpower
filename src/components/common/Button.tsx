import React, { MouseEvent, memo } from "react";
import styled from "styled-components";

interface ButtonProps {
  type?: "button" | "submit";
  form?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  bgColor?: string;
  text: string;
}

const StyleButton = styled.button<{
  $color?: string;
  $bgColor?: string;
}>`
  position: relative;
  width: 335px;
  height: 74px;
  border-radius: 12px;
  background-color: ${(prop) => (prop.$bgColor ? prop.$bgColor : "#4757ff")};
  border: solid 2px #212529;
  color: ${(prop) => (prop.$color ? prop.$color : "#ffffff")};
  font-size: 32px;
  font-weight: bold;
  div {
    position: absolute;
    top: 8px;
    left: -2px;
    z-index: -1;
    border-radius: 12px;
    width: 335px;
    height: 74px;
    background-color: #212529;
  }
`;

function Button(props: ButtonProps) {
  const { type = "button", form, onClick, color, bgColor, text } = props;
  return (
    <StyleButton
      type={type}
      form={form}
      onClick={onClick}
      $color={color}
      $bgColor={bgColor}
    >
      {text}
      <div></div>
    </StyleButton>
  );
}

export default memo(Button);
