import axios from "axios";

export interface timeData {
  memberId: number;
  minutes: number;
  seconds: number;
}

export const PutTime = async (timeData: timeData) => {
  //응답 성공
  const { data } = await axios.put(
    `http://27.96.135.58:8080//v1/api/member/${timeData.memberId}/time`,
    timeData,
    {
      withCredentials: true,
    }
  );
  return data;
};
