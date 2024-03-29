import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RefreshIcon from "@mui/icons-material/Refresh";
// import { useMutation } from "react-query";
import axios from "axios";
import Button from "../components/common/Button";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import { useMutation } from "react-query";

interface FormData {
  memberName: string;
}

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
  margin-bottom: 112px;
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

const Brain = styled.img`
  width: 70px;
  height: 70px;
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

function CreateNickname() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  async function postfetchNickname(formData: FormData) {
    //응답 성공
    const { data } = await axios.post(
      `http://27.96.135.58:8080/v1/api/members`,
      formData,
      {
        withCredentials: true,
      }
    );
    return data;
  }

  const { mutate } = useMutation(postfetchNickname, {
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: (data) => {
      setUser((prevUser) => ({
        ...prevUser,
        nickname: data.memberName,
        memberId: data.memberId,
      }));
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data: any) => {
    mutate(data);
    setValue("memberName", "");
    navigate("/problem");
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
            <Brain
              src={`${process.env.PUBLIC_URL}/images/brain.webp`}
              alt="두뇌"
            />
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
      <Button type="submit" form="memberName" text="다음" />
    </Wrapper>
  );
}
export default CreateNickname;
