import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getProblems } from "../api/problem/getProblem";
import { useRecoilState } from "recoil";
import { User, userState } from "../atoms/userState";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { postAnswer } from "../api/problem/postAnswer";
import { PutTime, timeData } from "../api/user/putTime";

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

const LevelToggle = styled.li<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 26px;
  background-color: ${(props) => (props.$isActive ? "#fff" : "#c1c6cc")};
  border-radius: 12px 12px 0 0;
  border-width: 2px;
  border-style: solid;
  border-color: #212529;
  color: ${(props) => (props.$isActive ? "#4757ff" : "#495057")};
  font-size: 14px;
  margin-left: -2px;
  border-bottom: ${(props) => props.$isActive && "none"};
  font-weight: ${(props) => props.$isActive && "bold"};
`;

const ContentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  height: 340px;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #212529;
  border-top: none;
  font-size: 14px;
  line-height: 155%;
`;

const BtnBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 53px;
`;

const ProblemDesc = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
`;

function Problem() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

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
  }, [minutes, seconds]);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  const [id, setId] = useState(0);

  const { data, isLoading } = useQuery<IProblem[], Error>(["problems"], () =>
    getProblems()
  );

  const [user, setUser] = useRecoilState<User>(userState);

  // 정답 클릭시 answer api post 요청
  const { mutate: mutateAnswer } = useMutation(postAnswer, {
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  // 마지막 문제 클릭시 time api put 요청
  const { mutate: mutateTime } = useMutation(PutTime, {
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const BtnClickHandler = (answer: string) => {
    if (id !== 4) {
      // answer post 넣기
      mutateAnswer({
        memberId: user.memberId,
        problemId: id + 1,
        selectedAnswer: answer,
      });
      setId((pre) => pre + 1);
    }
    if (id === 4) {
      mutateAnswer({
        memberId: user.memberId,
        problemId: id + 1,
        selectedAnswer: answer,
      });
      mutateTime({
        memberId: user.memberId,
        minutes: user.time.minutes,
        seconds: user.time.seconds,
      });
      navigate("/result");
    }
  };

  return (
    <>
      {isLoading ? (
        <>isload</>
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
                <LevelToggle $isActive={id === 0 ? true : false}>
                  Lv.1
                </LevelToggle>
                <LevelToggle $isActive={id === 1 ? true : false}>
                  Lv.2
                </LevelToggle>
                <LevelToggle $isActive={id === 2 ? true : false}>
                  Lv.3
                </LevelToggle>
                <LevelToggle $isActive={id === 3 ? true : false}>
                  Lv.4
                </LevelToggle>
                <LevelToggle $isActive={id === 4 ? true : false}>
                  Lv.5
                </LevelToggle>
              </LevelToggles>
            </LevelNav>
            <ContentBox>
              <ProblemDesc>{data?.[id].problem}</ProblemDesc>
            </ContentBox>
            <BtnBox>
              {[
                data?.[id].choice1,
                data?.[id].choice2,
                data?.[id].choice3,
                data?.[id].choice4,
              ].map((choice, i) => (
                <Button
                  onClick={() => {
                    BtnClickHandler(choice || "");
                  }}
                  key={i}
                  text={choice || ""}
                  width="159.5px"
                  height="90px"
                  color="#212529"
                  bgColor="#fff"
                />
              ))}
            </BtnBox>
          </Wrapper>
        </>
      )}
    </>
  );
}

export default Problem;
