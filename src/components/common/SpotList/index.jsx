import Image from 'next/image';
import React from 'react';
import Masonry from 'react-responsive-masonry';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  position: relative !important;
  height: unset !important;
`;

export default function SpotList() {
  return (
    <Masonry columnsCount={2} gutter='1rem'>
      <StyledImage src='/images/dummy_images/dummy1.jpeg' alt='dummy' fill />
      <StyledImage src='/images/dummy_images/dummy2.jpeg' alt='dummy' fill />
      <StyledImage src='/images/dummy_images/dummy3.jpeg' alt='dummy' fill />
      <StyledImage src='/images/dummy_images/dummy4.jpeg' alt='dummy' fill />
    </Masonry>
  );
}
