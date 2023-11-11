import styled from "styled-components";
import { ReactComponent as Brain } from "../images/brain.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const Wrapper = styled.div`
  width: 100%;
  height: 814px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SvgBox = styled.div`
  filter: drop-shadow(0px 4px 0px rgb(0, 0, 0, 0.25));
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 195px;
`;

const Title = styled.h1`
  font-family: PartialSansKR-Regular;
  font-size: 48px;
  text-shadow: -3px -3px 0 #ffd752, 3px -3px 0 #ffd752, -3px 3px 0 #ffd752,
    3px 3px 0 #ffd752;
  color: #5757ff;
  filter: drop-shadow(0px 4px 0px rgb(0, 0, 0, 0.25));
`;

const SubTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 310px;
  height: 62px;
  margin-top: 9px;
  background-color: #fff;
  border: 2px solid #000;
`;

const SubTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #212529;
`;

const Desc = styled.p`
  margin-top: 28px;
  padding: 0 20px;
  text-align: center;
  font-size: 16px;
  word-break: break-all;
  line-height: 150%;
`;

const Btn = styled.button`
  position: relative;
  width: 335px;
  height: 74px;
  margin-top: 127px;
  border-radius: 12px;
  background-color: #4757ff;
  border: solid 2px #212529;
  color: #ffffff;
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

function Home() {
  const { data, isLoading } = useQuery(["admin"], async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/v1/api/admin/problems`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  });
  const navigate = useNavigate();
  function handleClick() {
    navigate("/nick");
  }
  return (
    <Wrapper>
      <Main>
        <SvgBox>
          <Brain />
        </SvgBox>
        <Title>두뇌 풀 가동</Title>
        <SubTitleBox>
          <SubTitle>당신의 수학레벨은?</SubTitle>
        </SubTitleBox>
      </Main>
      <Desc>
        {"<" + "두뇌풀가동" + ">" + "수학레벨 테스트를 통해"}
        <br />
        나의 두뇌 레벨은 몇 Lv 일지 알아보자!
      </Desc>
      <Btn onClick={handleClick}>
        시작하기
        <div></div>
      </Btn>
    </Wrapper>
  );
}
export default Home;
