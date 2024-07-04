import Tab from '@/components/MyPage/Tab';
import color from '@/styles/color';
import font from '@/styles/font';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export default function MyPage() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <Image src='/icons/profile.svg' alt='profile' width={96} height={96} />
        <Name>댕댕이</Name>
        <Button>내 정보 수정하기</Button>
      </ProfileWrapper>
      <Tab />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  height: 36.3rem;
  background-color: aliceblue;
`;

const Name = styled.div`
  ${font.title}
`;

const Button = styled.button`
  width: 18.6rem;
  height: 3.8rem;

  cursor: pointer;
  ${font.bold_13}

  background-color: ${color.primary};
  color: white;
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09),
    0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
