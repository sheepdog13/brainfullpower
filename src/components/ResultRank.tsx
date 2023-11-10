import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const RankBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  height: 173px;
  border: 2px solid #212529;
  margin-top: 36px;
`;

const RankTop = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 32px;
  background-color: #ff5f57;
  border-radius: 50%;
  border: 2px solid #212529;
  p {
    font-family: PartialSansKR-Regular;
    font-size: 20px;
  }
`;

const RankDescBox = styled.div`
  width: 331px;
  height: 119px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  color: #212529;
  p {
    font-size: 16px;
    line-height: 130%;
    span {
      font-size: 32px;
      font-weight: bold;
      line-height: 140%;
    }
  }
`;
const RankBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 331px;
  height: 56px;
  background-color: #ff5f57;
  border-top: 2px solid #212529;
  border-bottom: 6px solid #212529;
  p {
    margin-left: 17px;
    font-size: 20px;
    font-weight: bold;
    color: #212529;
  }
`;
const SvgBox = styled.div`
  margin-left: 12px;
  svg {
    margin-left: -12px;
  }
`;

function ResultRank() {
  return (
    <>
      <RankBox>
        <RankTop>
          <p>랭킹</p>
        </RankTop>
        <RankDescBox>
          <p>
            축하드려요! [닉네임일이삼]은 전세계에서
            <br />
            <span>122번째</span>로 수학을 잘합니다!
          </p>
        </RankDescBox>
        <RankBtn>
          <p>전세계 랭킹보기</p>
          <SvgBox>
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
            <SvgIcon component={PlayArrowIcon} sx={{ fontSize: 27 }} />
          </SvgBox>
        </RankBtn>
      </RankBox>
    </>
  );
}
export default ResultRank;
