import Back from '@/components/common/Back';
import SpotList from '@/components/common/SpotList';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function NewList() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleClickSubmit = async e => {
    // e.preventDefault();
    setError('');

    try {
      const req = { userId: 4, folderName: name };
      const res = await axios.post('/api/postFolder', req);

      if (res.status === 200) {
        console.log('folder post 성공:', res.data);
        // 토큰 저장 (예: localStorage)
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('username', res.data.username);
        router.push('/my-page');
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
    (index === 0 && (
      <Wrapper>
        <Back />
        <SubTitle>새로운 목록의</SubTitle>
        <Title>이름을 적어주세요.</Title>
        <Input
          style={{
            backgroundImage: "url('/icons/sort.svg')",
          }}
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder='목록명'
        />
        <ButtonWrapper>
          <Button onClick={() => setIndex(index + 1)}>다음</Button>
        </ButtonWrapper>
      </Wrapper>
    )) ||
    (index === 1 && (
      <Wrapper>
        <BackButton
          onClick={() => setIndex(index - 1)}
          src='/icons/back.svg'
          alt='back'
          width={45}
          height={45}
        />
        <SubTitle>이 목록에 저장할 사진들의</SubTitle>
        <Title>위치를 입력해주세요</Title>
        <Input
          style={{
            backgroundImage: "url('/icons/location-on.svg')",
          }}
          type='text'
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
          placeholder='위치'
        />
        <ButtonWrapper>
          <Button onClick={() => setIndex(index + 1)}>다음</Button>
        </ButtonWrapper>
      </Wrapper>
    )) ||
    (index === 2 && (
      <ImgWrapper>
        <BackButton
          onClick={() => setIndex(index - 1)}
          src='/icons/back.svg'
          alt='back'
          width={45}
          height={45}
        />
        <SubTitle>이 목록에 저장할 수 있는</SubTitle>
        <LastTitle>사진들을 추천해드려요.</LastTitle>
        <SpotList />
        <FloatingButton onClick={() => handleClickSubmit()}>
          목록 생성하기
        </FloatingButton>
      </ImgWrapper>
    ))
  );
}

const Wrapper = styled.div`
  padding: 33rem 5rem;
`;

const ImgWrapper = styled.div`
  padding: 135px 25px;
`;

const Title = styled.div`
  color: #000;
  font-family: 'SUIT Variable';
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const LastTitle = styled.div`
  color: #000;
  font-family: 'SUIT Variable';
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  margin-bottom: 39px;
`;

const SubTitle = styled.div`
  color: #00b3ff;
  font-family: 'SUIT Variable';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgb(236, 236, 236);
  background-size: 24px 24px;
  background-position: 10px center;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09),
    0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: 32px;
  padding-left: 40px;
`;

const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  margin-top: 16px;
`;

const Button = styled.div`
  width: 71px;
  height: 40px;
  border-radius: 10px;

  text-align: center;
  padding: 12px 24px;

  color: white;
  background: #69d2ff;
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09),
    0px 2px 4px 0px rgba(0, 0, 0, 0.1);

  color: #fff;

  font-family: 'SUIT Variable';
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const BackButton = styled(Image)`
  position: absolute;
  top: 60px;
  left: 32px;
  cursor: pointer;
`;

const FloatingButton = styled.button`
  width: 309px;
  height: 43px;

  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translate(-50%, 0);

  color: #fff;
  font-family: 'SUIT Variable';
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  cursor: pointer;

  border: none;
  border-radius: 10px;
  background: #69d2ff;
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09),
    0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
