import font from '@/styles/font';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Tab() {
  const [selected, setSelected] = useState('my');

  return (
    <Wrapper>
      <Button selected={selected === 'my'} onClick={setSelected('my')}>
        내가 올린 스팟
      </Button>
      <Line />
      <Button selected={selected === 'save'} onClick={setSelected('save')}>
        내가 저장한 스팟
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Line = styled.div`
  width: 1px;
  height: 4.2rem;
  border-right: 1px solid #c2c2c2;
`;

const Button = styled.div`
  ${font.bold_16}
  width: 50%;
  text-align: center;
  padding: 1.1rem 0;

  border-bottom: 1px solid #c2c2c2;
`;
