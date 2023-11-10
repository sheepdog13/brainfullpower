import styled from "styled-components";
import { ReactComponent as Brain } from "../images/brain.svg";
import ResultLvBox from "../components/ResultLvBox";
import ResultRank from "../components/ResultRank";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1758px;
  background-color: #4757ff;
`;

const BrainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 52px;
  background-color: #ff85de;
  border: 2px solid #212529;
`;

const Title = styled.h1`
  width: 278px;
  margin-top: 16px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 130%;
`;

const GradeBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 388px;
  margin-top: 36px;
  border: 2px solid #212529;
  border-bottom: 8px solid #212529;
`;
const GradeDesc = styled.div`
  flex-direction: column;
  padding: 20px;
  width: 267px;
  background-color: #fff;
  border-right: 2px solid #212529;
  h2 {
    margin-top: 24px;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    margin-top: 12px;
    font-size: 16px;
    font-weight: bold;
    line-height: 150%;
    span {
      color: #ff5f57;
    }
  }
  hr {
    margin-top: 12px;
  }
`;

const ExplanBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  font-size: 20px;
  font-weight: bold;
  background-color: #09e37a;
  h2 {
    transform: rotate(-90deg);
    writing-mode: vertical-rl;
  }
`;

function Result() {
  return (
    <Wrapper>
      <BrainBox>
        <Brain />
      </BrainBox>
      <Title>[닉네임일이삼]님의 수준은?</Title>
      <ResultLvBox />
      <ResultRank />
      <GradeBox>
        <GradeDesc>
          <h2>성적표</h2>
          <p>
            [닉네임일이삼]님은 초중등 수학문제를 <span>1</span>개
            틀렸습니다&gt;.&lt;{" "}
          </p>
          <p>
            5문제 푸는데 총 걸린시간은
            <br /> <span>60분 00초</span>입니다@.@
          </p>
          <hr />
        </GradeDesc>
        <ExplanBtn>{}</ExplanBtn>
      </GradeBox>
    </Wrapper>
  );
}

export default Result;
