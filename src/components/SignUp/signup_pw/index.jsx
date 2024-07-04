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
  font-size: 16px;
  color: #000000;
  outline: none;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
  text-align: center;
  text-decoration: none;
  border: none; /* 버튼에 기본적으로 있는 border 제거 */
  cursor: pointer; /* 포인터 커서로 변경 */
`;

export default function SignUp_Password({ setIndex, setPassword, password, handleSubmit }) {
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <RegisterContainer>
      <Subheader>스파터즈에서 사용할</Subheader>
      <Header>비밀번호를 적어주세요.</Header>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <Input
            style={{
              backgroundImage: "url('/icons/key.svg')",
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="비밀번호"
          />
        </FormItem>
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              fontWeight: "800",
            }}
          >
            {error}
          </p>
        )}
        <ButtonContainer>
          <Button onClick={(e) => handleSubmit(e)}>다음</Button>
        </ButtonContainer>
      </Form>
    </RegisterContainer>
  );
}
