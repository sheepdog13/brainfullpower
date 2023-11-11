import styled from "styled-components";
import { ReactComponent as Brain } from "../images/brain.svg";
import ResultLvBox from "../components/ResultLvBox";
import ResultRank from "../components/ResultRank";
import SvgIcon from "@mui/material/SvgIcon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
  padding-top: 5px;
  font-size: 20px;
  font-weight: bold;
  background-color: #09e37a;
  h2 {
    margin-top: 5px;
    writing-mode: vertical-rl;
  }
`;
const GradeResult = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
`;
const GradeProblem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  p {
    margin-top: 0;
    font-weight: normal;
    font-size: 16px;
  }
`;
const ProblemResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ProblemResultColor = styled.div<{ isOk: boolean }>`
  display: flex;
  flex-direction: row;
  color: ${(props) => (props.isOk ? "#4757FF" : "#FF5F57")};
  gap: 4px;
  p {
    margin-top: 0;
    font-weight: bold;
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
          <GradeResult>
            <GradeProblem>
              <p>초등학교 3학년문제</p>
              <p>초등학교 4학년문제</p>
              <p>초등학교 5학년문제</p>
              <p>초등학교 6학년문제</p>
              <p>중학교 1학년문제</p>
            </GradeProblem>
            <ProblemResult>
              <ProblemResultColor isOk={true}>
                <p>정답</p>
                <p> O</p>
              </ProblemResultColor>
              <ProblemResultColor isOk={true}>
                <p>정답</p>
                <p> O</p>
              </ProblemResultColor>
              <ProblemResultColor isOk={true}>
                <p>정답</p>
                <p> O</p>
              </ProblemResultColor>
              <ProblemResultColor isOk={false}>
                <p>오답</p>
                <p> X</p>
              </ProblemResultColor>
              <ProblemResultColor isOk={false}>
                <p>오답</p>
                <p> X</p>
              </ProblemResultColor>
            </ProblemResult>
          </GradeResult>
        </GradeDesc>
        <ExplanBtn>
          <SvgIcon component={ArrowForwardIcon} sx={{ fontSize: 20 }} />
          <SvgIcon component={ArrowForwardIcon} sx={{ fontSize: 20 }} />
          <SvgIcon component={ArrowForwardIcon} sx={{ fontSize: 20 }} />
          <SvgIcon component={ArrowForwardIcon} sx={{ fontSize: 20 }} />
          <SvgIcon component={ArrowForwardIcon} sx={{ fontSize: 20 }} />
          <h2>문제풀이가 궁금하신가요?</h2>
        </ExplanBtn>
      </GradeBox>
    </Wrapper>
  );
}

export default Result;
