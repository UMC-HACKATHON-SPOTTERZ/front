import { useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Image from 'next/image';
import { baseURL } from '../../../../front/src/api/setting';

export const LoginContainer = styled.div`
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 40px;
`;
export const SubHeader = styled.div`
  color: rgb(0, 179, 255);
  font-family: 'SUIT Variable';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 294px;
  height: 40px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.5);
  border: none;
  background-size: 24px 24px;
  background-position: 10px center;
  background-repeat: no-repeat;
  padding-left: 40px; /* 이미지와 텍스트 간 간격을 유지하기 위해 왼쪽 패딩 추가 */
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Button = styled.button`
  width: 186px;
  height: 38px;
  border-radius: 10px;
  background: rgb(105, 210, 255);
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09),
    0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  border: none;
  color: white;
  cursor: pointer;
`;
export const Registerlink = styled.a`
  font-family: SUIT Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  color: rgb(0, 179, 255);
`;
export const SocialLogin = styled.div`
  display: flex;
  gap: 30px;
`;
export const SocialButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background-color: ${({ $bgColor }) => $bgColor || '#ccc'};
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export default function Login() {
  const [Id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('/api/login', { username: Id, password });

      if (res.status === 200) {
        console.log('로그인 성공:', res.data);
        // 토큰 저장 (예: localStorage)
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('username', res.data.username);
        router.push('/');
      } else {
        setError('로그인 요청에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 요청 실패:', error);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('네트워크 오류: 로그인 요청에 실패했습니다.');
      }
    }
  };

  return (
    <LoginContainer>
      <SubHeader>인생샷 명소, 제일 쉽게 찾는 법</SubHeader>
      <Header>spotterz</Header>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <Input
            type='text'
            style={{
              backgroundImage: "url('/icons/person.svg')",
            }}
            value={Id}
            onChange={e => setId(e.target.value)}
            required
            placeholder='아이디'
          />
        </FormItem>
        <FormItem>
          <Input
            type='password'
            style={{
              backgroundImage: "url('/icons/key.svg')",
            }}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder='비밀번호'
          />
        </FormItem>
        <Button type='submit'>로그인</Button>
      </Form>
      <Registerlink href={"/sign_up"}>회원가입 하기</Registerlink>
      <SocialLogin>
        <SocialButton $bgColor='#FFE812'>
          <Image src='/icons/kakao.svg' alt='카카오' width={24} height={24} />
        </SocialButton>
        <SocialButton $bgColor='#04C75B'>
          <Image src='/icons/naver.svg' alt='네이버' width={24} height={24} />
        </SocialButton>
        <SocialButton $bgColor='#F6F6F6'>
          <Image src='/icons/google.svg' alt='구글' width={24} height={24} />
        </SocialButton>
        <SocialButton $bgColor='#000'>
          <Image src='/icons/apple.svg' alt='애플' width={24} height={24} />
        </SocialButton>
      </SocialLogin>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </LoginContainer>
  );
}
