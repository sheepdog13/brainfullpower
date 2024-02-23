import { atom } from "recoil";

interface answer {
  problemId: number;
  answer: string;
}

export interface User {
  score: number;
  time: number;
  answers: answer[];
}
export const userState = atom<User>({
  key: "user",
  default: {
    score: 0,
    time: 0,
    answers: [],
  },
});
