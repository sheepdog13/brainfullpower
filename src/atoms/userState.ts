import { atom } from "recoil";

export interface answer {
  problemId: number;
  answer: string;
  isCorrect: boolean;
}

export interface User {
  nickname: string;
  memberId: number;
  score: number;
  time: { minutes: number; seconds: number };
  answers: answer[];
}
export const userState = atom<User>({
  key: "user",
  default: {
    nickname: "",
    memberId: 0,
    score: 0,
    time: { minutes: 0, seconds: 0 },
    answers: [],
  },
});
