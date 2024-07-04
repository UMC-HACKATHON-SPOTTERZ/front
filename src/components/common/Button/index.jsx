import React from 'react';
import * as S from './style';
import { useRouter } from 'next/router';

export default function Button({ children, link = '/' }) {
  const router = useRouter();

  return (
    <S.Button onClick={() => router.push(`/${link}`)}>{children}</S.Button>
  );
}
