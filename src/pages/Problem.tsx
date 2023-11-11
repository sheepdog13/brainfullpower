import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { scoreAtom } from "../atoms";
import { couldStartTrivia } from "typescript";

interface IProblem {
  answerDetail: string;
  answerSummary: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  levelId: number;
  point: number;
  problem: string;
  problemId: number;
  problemPicture: null;
  problemType: number;
}

const Wrapper = styled.div`
  width: 100%;
  height: 814px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  width: 94px;
  height: 32px;
  margin-top: 60px;
  border-radius: 999px;
  background-color: #495057;
  color: #eaedf0;
`;

const TimerNum = styled.span`
  margin-left: 4px;
`;

const LevelNav = styled.div`
  width: 335px;
  height: 40px;
  margin-top: 38px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: #4757ff;
  border: 2px solid #212529;
`;

const LevelToggles = styled.ul`
  display: flex;
  margin-left: 12px;
  margin-top: 13px;
`;

const LevelToggle = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 26px;
  background-color: ${(props) => (props.isActive ? "#fff" : "#c1c6cc")};
  border-radius: 12px 12px 0 0;
  border-width: 2px;
  border-style: solid;
  border-color: #212529;
  color: ${(props) => (props.isActive ? "#4757ff" : "#495057")};
  font-size: 14px;
  margin-left: -2px;
  border-bottom: ${(props) => props.isActive && "none"};
  font-weight: ${(props) => props.isActive && "bold"};
`;

const ContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  height: 340px;
  margin-bottom: 38px;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #212529;
  border-top: none;
  font-size: 14px;
  line-height: 155%;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 335px;
  gap: 16px;
  margin-top: 16px;
`;

const Btn = styled.button`
  position: relative;
  width: 159.5px;
  height: 90px;
  border-radius: 12px;
  background-color: #fff;
  border: solid 2px #212529;
  color: #212529;
  font-size: 32px;
  font-weight: bold;
  div {
    position: absolute;
    top: 8px;
    left: -2px;
    z-index: -1;
    border-radius: 12px;
    width: 159.5px;
    height: 90px;
    background-color: #212529;
  }
`;

function Problem() {
  const { id } = useParams();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const navigate = useNavigate();
  const [score, setScore] = useRecoilState(scoreAtom);
  const { data, isLoading } = useQuery<IProblem>(["problem", id], async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/v1/api/problems/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes === 60) return minutes;
      if (seconds === 59) {
        setMinutes((prevMinutes) => prevMinutes + 1);
        setSeconds(0);
      } else {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  const navigateHandler = () => {
    if (Number(id) < 5) {
      navigate(`/problem/${Number(id) + 1}`);
    } else if (id === "5") {
      navigate("/result");
    }
  };

  const isCorrect = (chose: string) => {
    if (chose === data?.answerSummary) {
      setScore(score + Number(id));
    } else {
      return score;
    }
  };

  const BtnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    isCorrect(e.currentTarget.value);
    navigateHandler();
  };

  return (
    <>
      {isLoading ? (
        <Wrapper>loading중</Wrapper>
      ) : (
        <>
          <Wrapper>
            <TimeBox>
              <SvgIcon component={TimerIcon} sx={{ fontSize: 20 }} />
              <TimerNum>
                {formatTime(minutes)}:{formatTime(seconds)}
              </TimerNum>
            </TimeBox>
            <LevelNav>
              <LevelToggles>
                <LevelToggle isActive={id === "1" ? true : false}>
                  Lv.1
                </LevelToggle>
                <LevelToggle isActive={id === "2" ? true : false}>
                  Lv.2
                </LevelToggle>
                <LevelToggle isActive={id === "3" ? true : false}>
                  Lv.3
                </LevelToggle>
                <LevelToggle isActive={id === "4" ? true : false}>
                  Lv.4
                </LevelToggle>
                <LevelToggle isActive={id === "5" ? true : false}>
                  Lv.5
                </LevelToggle>
              </LevelToggles>
            </LevelNav>
            <ContentBox>
              <div>{data?.problem}</div>
            </ContentBox>
            <BtnBox>
              <Btn value={data?.choice1} onClick={BtnClickHandler}>
                {data?.choice1}
                <div></div>
              </Btn>
              <Btn value={data?.choice2} onClick={BtnClickHandler}>
                {data?.choice2}
                <div></div>
              </Btn>
            </BtnBox>
            <BtnBox>
              <Btn value={data?.choice3} onClick={BtnClickHandler}>
                {data?.choice3}
                <div></div>
              </Btn>
              <Btn value={data?.choice4} onClick={BtnClickHandler}>
                {data?.choice4}
                <div></div>
              </Btn>
            </BtnBox>
          </Wrapper>
        </>
      )}
    </>
  );
}

export default Problem;
