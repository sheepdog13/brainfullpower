import axios from "axios";

interface answerData {
  memberId: number;
  problemId: number;
  selectedAnswer: string;
}

export const postAnswer = async (answerData: answerData) => {
  //응답 성공
  const { data } = await axios.post(
    `http://27.96.135.58:8080/v1/api/problems/answer`,
    answerData,
    {
      withCredentials: true,
    }
  );
  return data;
};
