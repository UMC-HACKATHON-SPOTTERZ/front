import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

export default function Back() {
  const router = useRouter();

  return (
    <BackButton
      onClick={() => router.back()}
      src='/icons/back.svg'
      alt='back'
      width={45}
      height={45}
    />
  );
}

const BackButton = styled(Image)`
  position: absolute;
  top: 60px;
  left: 32px;
  cursor: pointer;
`;
