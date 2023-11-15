import styled from "styled-components";

interface IBtnProps {
  width?: string;
  height?: string;
  top?: string;
  bgcolor: string;
  color: string;
  text: string;
  onClick?: any;
}

const BtnBox = styled.button<{
  top: string;
  bgcolor: string;
  color: string;
  width: string;
  height: string;
}>`
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

function Btn(props: IBtnProps) {
  return (
    <BtnBox
      onClick={props.onClick}
      color={props.color}
      bgcolor={props.bgcolor}
      width={props.width ?? "335px"}
      height={props.height ?? "74px"}
      top={props.top ?? "none"}
    >
      {props.text}
      <div></div>
    </BtnBox>
  );
}

export default Btn;
