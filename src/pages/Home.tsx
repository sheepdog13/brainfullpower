import styled from "styled-components";
import { ReactComponent as Brain } from "../images/brain.svg";

const Wrapper = styled.div`
  width: 375px;
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

function Home() {
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
      <Desc></Desc>
    </Wrapper>
  );
}
export default Home;
