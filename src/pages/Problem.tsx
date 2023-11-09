import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import { useEffect, useState } from "react";

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

const LevelToggle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 26px;
  background-color: #c1c6cc;
  border-radius: 12px 12px 0 0;
  border-width: 2px;
  border-style: solid;
  border-color: #212529;
  color: #495057;
  font-size: 14px;
  margin-left: -2px;
  &:first-child {
    background-color: #fff;
    border-bottom: none;
    font-weight: bold;
    color: #4757ff;
  }
`;

const ContentBox = styled.div`
  position: relative;
  width: 335px;
  height: 340px;
  margin-bottom: 38px;
  background-color: #fff;
  border: 2px solid #212529;
  border-top: none;
  border-radius: 0 0 12px 12px;
  div {
    position: absolute;
    top: 8px;
    left: -2px;
    z-index: -1;
    border-radius: 12px;
    width: 335px;
    height: 340px;
    background-color: #212529;
  }
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
  }, [seconds]);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  const BtnClickHandler = () => {};

  return (
    <Wrapper>
      <TimeBox>
        <SvgIcon component={TimerIcon} sx={{ fontSize: 20 }} />
        <TimerNum>
          {formatTime(minutes)}:{formatTime(seconds)}
        </TimerNum>
      </TimeBox>
      <LevelNav>
        <LevelToggles>
          <LevelToggle>Lv.1</LevelToggle>
          <LevelToggle>Lv.2</LevelToggle>
          <LevelToggle>Lv.3</LevelToggle>
          <LevelToggle>Lv.4</LevelToggle>
          <LevelToggle>Lv.5</LevelToggle>
        </LevelToggles>
      </LevelNav>
      <ContentBox>
        <div></div>
      </ContentBox>
      <BtnBox>
        <Btn onClick={BtnClickHandler}>
          1<div></div>
        </Btn>
        <Btn onClick={BtnClickHandler}>
          2<div></div>
        </Btn>
      </BtnBox>
      <BtnBox>
        <Btn onClick={BtnClickHandler}>
          3<div></div>
        </Btn>
        <Btn onClick={BtnClickHandler}>
          4<div></div>
        </Btn>
      </BtnBox>
    </Wrapper>
  );
}

export default Problem;
