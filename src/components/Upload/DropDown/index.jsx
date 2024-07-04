import useDetectClose from '@/hooks/useDetectClose';
import font from '@/styles/font';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function DropDown() {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [selected, setSelected] = useState('카테고리를 선택해주세요');

  return (
    <Wrapper>
      <DropdownButton
        onClick={myPageHandler}
        ref={myPageRef}
        $isDropped={myPageIsOpen}
      >
        {selected}
      </DropdownButton>
      <ItemWrapper $isDropped={myPageIsOpen}>
        <ItemTop onClick={() => setSelected('커플')}>커플</ItemTop>
        <Item onClick={() => setSelected('풍경')}>풍경</Item>
        <Item onClick={() => setSelected('가족')}>가족</Item>
        <Item onClick={() => setSelected('반려동물')}>반려동물</Item>
        <Item onClick={() => setSelected('친구')}>친구</Item>
        <ItemBottom onClick={() => setSelected('단독')}>단독</ItemBottom>
      </ItemWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.div`
  width: 244px;
  height: 40px;
  padding: 10px 20px;
  margin-bottom: 1rem;

  cursor: pointer;
  ${font.medium_15}

  border: none;
  border-radius: 10px;
  background: var(--Gray, #ececec);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09),
    0px 1px 2px 0px rgba(0, 0, 0, 0.1);
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 10;
  ${font.medium_15}

  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px); /* 위쪽으로 이동하는 값 설정 */
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    transform: translate(0, 0);
    border: 12px solid transparent;
  }

  ${({ $isDropped }) =>
    $isDropped &&
    `
      opacity: 1;
      visibility: visible;
      transform: translateY(0); /* 열릴 때는 원래 위치로 이동 */
    `};
`;

const ItemTop = styled.div`
  width: 244px;
  height: 40px;
  padding: 10px 20px;

  border: none;
  border-radius: 10px 10px 0 0;
  background: white;
`;

const Item = styled.div`
  width: 244px;
  height: 40px;
  padding: 10px 20px;

  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  background: white;
`;

const ItemBottom = styled.div`
  width: 244px;
  height: 40px;
  padding: 10px 20px;

  border: none;
  border-radius: 0 0 10px 10px;
  background: white;
`;
