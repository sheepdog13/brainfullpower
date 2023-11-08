import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 814px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeBox = styled.div`
  width: 94px;
  height: 32px;
  margin-top: 60px;
  border-radius: 999px;
  background-color: #495057;
`;

function Problem() {
  return (
    <Wrapper>
      <TimeBox></TimeBox>
    </Wrapper>
  );
}

export default Problem;
