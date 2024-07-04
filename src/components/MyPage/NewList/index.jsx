import font from '@/styles/font';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

export default function NewList({ title }) {
  const router = useRouter();

  return title ? (
    <ItemWrapper>
      {title}
      <Image src='/icons/arrow.svg' alt='arrow' width={17} height={31} />
    </ItemWrapper>
  ) : (
    <Wrapper onClick={() => router.push('/new-list')}>
      <Image src='/icons/plus_white.svg' alt='plus' width={37} height={37} />
      새로운 목록 만들기
    </Wrapper>
  );
}

const ItemWrapper = styled.div`
  width: 329px;
  height: 82px;
  padding: 0 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  ${font.title}
  color: white;
  border-radius: 40px;
  background: #d9d9d9;
`;

const Wrapper = styled.div`
  width: 329px;
  height: 82px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
  ${font.title}
  color: white;
  border-radius: 40px;
  background: #d9d9d9;
`;
