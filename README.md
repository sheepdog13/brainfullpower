# 두뇌 풀 가동

<br>

![소개서0](https://github.com/sheepdog13/brainfullpower/assets/112137282/df9edd25-c4ab-4332-ae31-d472365c867e)

### 배포 URL : [나중에 넣기]()

<br>

## 1. 사용 기술

### ✔️Frond-end

<p>
<img src="https://img.shields.io/badge/TypeScript-3178C6?&style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Reactquery-FF4154?style=for-the-badge&logo=Reactquery&logoColor=white">
</p>
<p>
<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
</p>

<br>

## 2. 유저 플로우

<img width="966" alt="스크린샷 2023-12-01 오후 9 05 05" src="https://github.com/sheepdog13/brainfullpower/assets/112137282/b193206d-e36c-4746-a3ba-7df774d92dc0">

<br>

## 3. 화면 구성

|                                                                         홈페이지                                                                         |                                                                        닉네임 입력                                                                         |                                                                        문제풀이                                                                        |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
|  <img src="https://github.com/sheepdog13/brainfullpower/assets/112137282/1bf8aa73-789c-4001-acdf-f40bfd7ef121" alt="홈페이지" width="200" height="433">  | <img src="https://github.com/sheepdog13/brainfullpower/assets/112137282/b2e6bd44-025e-41e0-8178-1a468a24cdb2" alt="닉네임 입력"  width="200" height="433"> | <img src="https://github.com/sheepdog13/brainfullpower/assets/112137282/aaa759c5-601e-477f-9a9f-4a38b4b3e747" alt="문제풀이" width="200" height="433"> |
|                                                                        결과페이지                                                                        |                                                                         결과페이지                                                                         |
| <img src="https://github.com/sheepdog13/brainfullpower/assets/112137282/4e98c255-cc44-4a6b-bd26-80417597adf3" width="200" alt="결과페이지" height="433"> |  <img src="https://github.com/sheepdog13/brainfullpower/assets/112137282/16e7b0d0-44b7-472d-a6e6-046395146cc3" alt="결과페이지" width="200" height="433">  |

<br>

## 4. 기능 설명

### recoil

> 소통의 중요성

user atom

```ts
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
```

문제 페이지에서 사용한 useratom

```js
const [user, setUser] = useRecoilState < User > userState;
// 유저 고른 답과 답이 정답인지 확인하는 함수
const checkAnswer = (i: number) => {
  if (String(i + 1) === data?.[id].answerSummary) {
    return { point: data?.[id].point, isCorrect: true };
  }
  return { point: 0, isCorrect: false };
};
// 버튼을 클릭했을때 일어나는 함수, i는 4개의 버튼의 index
const BtnClickHandler = (answer: string, i: number) => {
  // 마지막 문제가 아닐때
  if (id !== 4) {
    setId((pre) => pre + 1);
    const { point, isCorrect } = checkAnswer(i);
    setUser((prevUser) => ({
      ...prevUser,
      score: prevUser.score + point,
      answers: [...prevUser.answers, { problemId: id, answer, isCorrect }],
    }));
  }
  // 마지막 문제일때 result페이지로 이동
  if (id === 4) {
    const { point, isCorrect } = checkAnswer(i);
    setUser((prevUser) => ({
      score: prevUser.score + point,
      time: { minutes, seconds },
      answers: [...prevUser.answers, { problemId: id, answer, isCorrect }],
    }));
    navigate("/result");
  }
};
```

정답을 저장하는 post api를 만들었다는 사실을 늦게 확인해서 수정하는 과정이 있었습니다. <br>
내가 하는 일에 매몰되지 않고 백엔드와 소통하며 개발해야 함을 느꼈습니다.<br>

userstate의 정답은 post요청, 시간은 마지막 페이지에서 patch로 요청으로 수정 구현했습니다.

```js
const BtnClickHandler = (answer: string) => {
  if (id !== 4) {
    // answer post 넣기
    mutate({
      memberId: user.memberId,
      problemId: id + 1,
      selectedAnswer: answer,
    });
    setId((pre) => pre + 1);
  }
  if (id === 4) {
    mutate({
      memberId: user.memberId,
      problemId: id + 1,
      selectedAnswer: answer,
    });
    navigate("/result");
  }
};
```

아직 api가 나오지 않아서 통신은 안해봤습니다.

```js
export const PatchTime = async (timeData: timeData) => {
  const { data } = await axios.patch(
    `http://27.96.135.58:8080//v1/api/member/${timeData.memberId}/time`,
    timeData,
    {
      withCredentials: true,
    }
  );
  return data;
};
```

### react query

### 카카오톡 공유하기
