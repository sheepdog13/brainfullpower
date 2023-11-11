import styled from "styled-components";
import { ReactComponent as Brain } from "../images/brain.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useMutation } from "react-query";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  height: 814px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnionTop = styled.div`
  position: absolute;
  top: -30px;
  left: -2px;
  display: flex;
  width: 62px;
  height: 52px;
  border-top-left-radius: 12px;
  border: 2px solid #212529;
  border-bottom: none;
  border-right: none;
  background-color: #ffd752;
`;

const UnionRight = styled.div`
  position: absolute;
  top: -30px;
  left: 40px;
  width: 50px;
  height: 30px;
  border-top-right-radius: 50px;
  background-color: #ffd752;
  border: 2px solid #212529;
  border-left: none;
  border-bottom: none;
`;

const Union = styled.div`
  position: relative;
  margin-top: 194px;
  display: flex;
  width: 335px;
  height: 44px;
  background-color: #ffd752;
  border: 2px solid #212529;
  margin-bottom: -2px;
  border-top-right-radius: 12px;
`;

const CircleBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 11px;
  margin-left: 18px;
  z-index: 1;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 2px solid #212529;
`;

const FolderSvgBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 10px;
  z-index: 1;
`;

const Rectagle = styled.div`
  width: 217px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid #212529;
`;

const ContextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  height: 300px;
  background-color: #ffd752;
  border: 2px solid #212529;
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
  border: 2px solid ${(props) => props.color};
  outline-color: ${(props) => props.color};
  font-size: 16px;
  font-weight: bold;
  color: #212529;
  &::placeholder {
    font-weight: normal;
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
  margin-top: 99px;
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
  async function postData(data: any) {
    try {
      //응답 성공
      const response = await axios.post(`/v1/api/members`, data, {
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  // const postUserData = async (data: any) => {
  //   const response = await fetch("https://port-0-brain-full-power-7lk2blookpwe8.sel5.cloudtype.app/v1/api/members"
  //     ,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   );

  //   if (!response.ok) {
  //     console.log("안들어가짐");
  //   }

  //   return response.json();
  // };
  // const mutation = useMutation(postUserData);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
    const user = { ...data };
    console.log(user);
    postData(user);
    // mutation.mutate(user);
    setValue("memberName", "");
    navigate("/problem/1");
  };

  return (
    <Wrapper>
      <Union>
        <UnionTop>
          <CircleBox>
            <Circle color="#FF5F57" />
            <Circle color="#FFD752" />
            <Circle color="#09E37A" />
          </CircleBox>
        </UnionTop>
        <UnionRight />
        <FolderSvgBox>
          <SvgIcon component={ArrowLeftIcon} sx={{ fontSize: 24 }} />
          <SvgIcon component={ArrowRightIcon} sx={{ fontSize: 24 }} />
          <SvgIcon component={RefreshIcon} sx={{ fontSize: 18 }} />
          <Rectagle />
        </FolderSvgBox>
      </Union>
      <ContextBox>
        <BrainBox>
          <SvgBox>
            <Brain />
          </SvgBox>
        </BrainBox>
        <NickNameDesc>닉네임을 입력해주세요!</NickNameDesc>
        <form id="memberName" onSubmit={handleSubmit(onSubmit)}>
          <Input
            color={errors.nickname ? "#FF5F57" : "#212529"}
            placeholder="닉네임(2글자 ~ 6글자)"
            {...register("memberName", {
              required: true,
              maxLength: 6,
              minLength: 2,
            })}
          ></Input>
        </form>
        {errors?.nickname && (
          <ErrorSpan>2글자 ~ 6글자 사이로 만들어주세요</ErrorSpan>
        )}
        <PrivacyNotice>개인정보 보호를 위해 실명은 NO!</PrivacyNotice>
      </ContextBox>
      <Btn type="submit" form="memberName">
        다음<div></div>
      </Btn>
    </Wrapper>
  );
}
export default CreateNickname;
