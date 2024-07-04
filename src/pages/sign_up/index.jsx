import { useState } from 'react';
import SignUp_ID from '../../components/SignUp/signup_id';
import SignUp_Nickname from '../../components/SignUp/signup_nickname';
import SignUp_Password from '../../components/SignUp/signup_pw';
import styled from 'styled-components';
import { baseURL } from '../../api/setting';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function SignUp() {
  const router = useRouter();

  const [index, setIndex] = useState(0);

  const [Id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const [nickname, setNickname] = useState(null);

  // 회원가입
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      console.log('비밀번호가 유효하여 회원가입 진행 가능');

      const res = await axios.post('/api/signup', {
        username: Id,
        password,
        nickname,
      });

      if (res.status === 200) {
        router.push('/');
      } else {
        alert('회원가입에 실패하였습니다.');
      }

      // 회원가입 성공 시 다음 페이지로 이동하거나 다른 작업 수행
    } catch (error) {
      console.error('회원가입 요청 실패:', error);
    }
  };

  switch (index) {
    case 0:
      return <SignUp_ID setIndex={setIndex} Id={Id} setId={setId} />;
    case 1:
      return (
        <SignUp_Nickname
          setIndex={setIndex}
          password={password}
          setNickname={setNickname}
        />
      );
    case 2:
      return (
        <SignUp_Password
          setIndex={setIndex}
          nickname={nickname}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      );
    default:
      break;
  }
}
