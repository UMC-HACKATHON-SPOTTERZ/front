import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

export const RegisterContainer = styled.div`
  height: 852px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 50px;
  gap: 5px;
`;
export const Subheader = styled.div`
  font-family: "SUIT Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: rgb(0, 179, 255);
`;

export const Header = styled.h1`
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgb(236, 236, 236);
  background-size: 24px 24px;
  background-position: 10px center;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: 32px;
  padding-left: 40px;
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center; /* 가로 중앙 정렬 */
  width: 71px;
  height: 40px;
  border-radius: 10px;
  background: rgb(105, 210, 255);
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  color: white;
  font-family: "SUIT Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center; /* 텍스트 세로 중앙 정렬을 위한 추가 */
  text-decoration: none; /* 링크 스타일 제거 */
`;

export default function SignUp_ID({ setIndex, setId, Id }) {
  const [error, setError] = useState("");
  const router = useRouter();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setError('');

  //     try {
  //       const res = await axios.post('/api/register', { Id, password, nickname });

  //       console.log('회원가입 성공:', res.data);
  //       // 토큰 저장
  //       localStorage.setItem('token', res.data.token);
  //       router.push('/');
  //     } catch (error) {
  //       console.error('회원가입 요청 실패:', error);
  //       if (error.response) {
  //         setError(error.response.data.message);
  //       } else {
  //         setError('회원가입 요청에 실패했습니다.');
  //       }
  //     }
  //   };

  return (
    <RegisterContainer>
      <Subheader>스파터즈에서 사용할</Subheader>
      <Header>아이디를 적어주세요.</Header>
      <Form>
        {/* onSubmit={handleSubmit} */}
        <FormItem>
          <Input
            style={{
              backgroundImage: "url('/icons/person.svg')",
            }}
            type="text"
            value={Id}
            onChange={(e) => setId(e.target.value)}
            required
            placeholder="아이디"
          />
        </FormItem>
        <ButtonContainer>
          <Button
            onClick={() => {
              setIndex(1);
            }}
          >
            다음
          </Button>
        </ButtonContainer>
      </Form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </RegisterContainer>
  );
}
