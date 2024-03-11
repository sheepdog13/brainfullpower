import styled from "styled-components";
import { useParams } from "react-router-dom";
import ResultLvBox from "../components/Result/ResultLvBox";
import ResultRank from "../components/Result/ResultRank";
import SvgIcon from "@mui/material/SvgIcon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../components/common/Button";
import { useRecoilState } from "recoil";
import { User, answer, userState } from "../atoms/userState";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../api/user/getUser";
import { useEffect } from "react";

const Wrapper = styled.div`
  position: absolute;
  z-index: -999;
  background-color: #4757ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1380px;
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

const Brain = styled.img`
  width: 70px;
  height: 70px;
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
  margin: 36px 0;
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
const ProblemResultColor = styled.div<{ $isOk: boolean }>`
  display: flex;
  flex-direction: row;
  color: ${(props) => (props.$isOk ? "#4757FF" : "#FF5F57")};
  gap: 4px;
  p {
    margin-top: 0;
    font-weight: bold;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function Result() {
  let { memberId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const { data, isLoading } = useQuery<User, Error>(
    ["user"],
    () => getUser(Number(memberId)),
    {
      enabled: false,
    }
  );

  const countWrongAnswers = (answerArray: answer[]) => {
    let count = 0;
    answerArray.forEach((answer: answer) => {
      if (!answer.isCorrect) {
        count++;
      }
    });
    return count;
  };

  const WrongNum = countWrongAnswers(user.answers);

  const { Kakao }: any = window;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO);
  }, [Kakao]);

  const share = (id: string) => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "두뇌풀가동",
        description: "내점수 공유하기",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: `https://brainfullpower.vercel.app/result/${id}`,
          webUrl: `https://brainfullpower.vercel.app/result/${id}`,
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: `https://brainfullpower.vercel.app/result/${id}`,
            webUrl: `https://brainfullpower.vercel.app/result/${id}`,
          },
        },
      ],
    });
  };

  return (
    <Wrapper>
      <BrainBox>
        <Brain src={`${process.env.PUBLIC_URL}/images/brain.webp`} alt="두뇌" />
      </BrainBox>
      <Title>[{user.nickname}]님의 수준은?</Title>
      <ResultLvBox score={user.score} />
      <ResultRank nick={user.nickname} />
      <GradeBox>
        <GradeDesc>
          <h2>성적표</h2>
          <p>
            [{user.nickname}]님은 초중등 수학문제를 <span>{WrongNum}</span>개
            틀렸습니다&gt;.&lt;{" "}
          </p>
          <p>
            5문제 푸는데 총 걸린시간은
            <br />{" "}
            <span>
              {user?.time.minutes}분 {user?.time.seconds}초
            </span>
            입니다@.@
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
              {user.answers.map((answer, i) => (
                <ProblemResultColor key={i} $isOk={answer.isCorrect}>
                  <p>{answer.isCorrect ? "정답" : "오답"}</p>
                  <p>{answer.isCorrect ? " O" : " X"}</p>
                </ProblemResultColor>
              ))}
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
      <BtnBox>
        <Button
          onClick={() => {
            navigate("/");
          }}
          color="#4757ff"
          bgColor="#fff"
          text="다시 도전!"
        />
        <Button
          onClick={() => {
            share(memberId || "");
          }}
          color="#fff"
          bgColor="#9199a1"
          text="내 점수 공유하기"
        />
      </BtnBox>
    </Wrapper>
  );
}

export default Result;
