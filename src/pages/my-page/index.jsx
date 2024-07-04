import NewList from '@/components/MyPage/NewList';
import SpotList from '@/components/common/SpotList';
import color from '@/styles/color';
import font from '@/styles/font';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function MyPage() {
  const [selected, setSelected] = useState('save');
  return (
    <Wrapper>
      <ProfileWrapper>
        <Image src='/icons/profile.svg' alt='profile' width={96} height={96} />
        <Name>댕댕이</Name>
        <Button>내 정보 수정하기</Button>
      </ProfileWrapper>
      <TabWrapper>
        <TabButton
          selected={selected === 'my'}
          onClick={() => setSelected('my')}
        >
          내가 올린 스팟
        </TabButton>
        <Line />
        <TabButton
          selected={selected === 'save'}
          onClick={() => setSelected('save')}
        >
          내가 저장한 스팟
        </TabButton>
      </TabWrapper>
      {selected === 'my' && <SpotList addImage={true} />}
      {selected === 'save' && (
        <ListWrapper>
          <NewList />
          <NewList title='파리' />
        </ListWrapper>
      )}
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

const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2.4rem;
`;

const Line = styled.div`
  width: 1px;
  height: 4.2rem;
  border-right: 1px solid #c2c2c2;
`;

const TabButton = styled.div`
  ${font.bold_16}
  width: 50%;
  text-align: center;
  padding: 1.1rem 0;

  cursor: pointer;

  color: ${props => (props.selected ? color.primary : 'black')};
  border-top: ${props => props.selected && '1px solid #c2c2c2'};
  border-bottom: 1px solid #c2c2c2;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
