import styled from "styled-components";
import { ReactComponent as Brain } from "../images/brain.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface INickname {
  nickname: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 814px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Union = styled.div`
  display: flex;
  margin-top: 194px;
  width: 335px;
  height: 64px;
  background-color: #ffd752;
  border: 2px solid #212529;
  margin-bottom: -2px;
`;

const ContextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  height: 300px;
  background-color: #ffd752;
  border: 2px solid #212529;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const BrainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 26px;
  background-color: #ff85de;
  border: 2px solid #212529;
`;

const SvgBox = styled.div`
  filter: drop-shadow(0px 4px 0px rgb(0, 0, 0, 0.25));
`;

const NickNameDesc = styled.h2`
  margin-top: 24px;
  font-size: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-top: 12px;
  padding-left: 12px;
  width: 275px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid #212529;
  font-size: 16px;
  &::placeholder {
    color: #9199a1;
  }
`;

const ErrorSpan = styled.span`
  margin-top: 10px;
  font-size: 12px;
  color: red;
`;

const PrivacyNotice = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: #495057;
`;

const Btn = styled.button`
  position: relative;
  width: 335px;
  height: 74px;
  margin-top: 127px;
  border-radius: 12px;
  background-color: #4757ff;
  border: solid 2px #212529;
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  div {
    position: absolute;
    top: 8px;
    left: -2px;
    z-index: -1;
    border-radius: 12px;
    width: 335px;
    height: 74px;
    background-color: #212529;
  }
`;

function CreateNickname() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    setValue("nickname", "");
    navigate("/problem");
  };
  return (
    <Wrapper>
      <Union></Union>
      <ContextBox>
        <BrainBox>
          <SvgBox>
            <Brain />
          </SvgBox>
        </BrainBox>
        <NickNameDesc>닉네임을 입력해주세요!</NickNameDesc>
        {errors?.nickname && (
          <ErrorSpan>2글자 ~ 6글자 사이로 만들어주세요</ErrorSpan>
        )}
        <form id="nickname" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="닉네임(2글자 ~ 6글자)"
            {...register("nickname", {
              required: true,
              maxLength: 6,
              minLength: 2,
            })}
          ></Input>
        </form>
        <PrivacyNotice>개인정보 보호를 위해 실명은 NO!</PrivacyNotice>
      </ContextBox>
      <Btn type="submit" form="nickname">
        다음<div></div>
      </Btn>
    </Wrapper>
  );
}
export default CreateNickname;
