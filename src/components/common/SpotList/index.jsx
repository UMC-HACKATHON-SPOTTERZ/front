import font from '@/styles/font';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Masonry from 'react-responsive-masonry';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  position: relative !important;
  height: unset !important;
  border-radius: 1rem;
`;

export default function SpotList({ addImage = false }) {
  const router = useRouter();

  return (
    <Masonry columnsCount={2} gutter='2rem'>
      {addImage === true && (
        <AddImage onClick={() => router.push('/upload')}>
          사진 업로드하기
        </AddImage>
      )}
      <StyledImage src='/images/dummy_images/dummy1.jpeg' alt='dummy' fill />
      <StyledImage src='/images/dummy_images/dummy2.jpeg' alt='dummy' fill />
      <StyledImage src='/images/dummy_images/dummy3.jpeg' alt='dummy' fill />
      <StyledImage src='/images/dummy_images/dummy4.jpeg' alt='dummy' fill />
    </Masonry>
  );
}

const AddImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 20rem;

  background-color: #c2c2c2;
  color: white;
  ${font.title}
  border-radius: 1rem;

  text-align: center;
`;
