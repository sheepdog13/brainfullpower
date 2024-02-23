import { atom } from "recoil";

interface answer {
  problemId: number;
  answer: string;
  isCorrect: boolean;
}

export interface User {
  score: number;
  time: { minutes: number; seconds: number };
  answers: answer[];
}
export const userState = atom<User>({
  key: "user",
  default: {
    score: 0,
    time: { minutes: 0, seconds: 0 },
    answers: [],
  },
});
