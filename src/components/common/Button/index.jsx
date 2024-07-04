import React from 'react';
import * as S from './style';

export default function Button({ children }) {
  const handleClick = () => {
    console.log('click');
  };

  return <S.Button onClick={() => handleClick()}>{children}</S.Button>;
}
