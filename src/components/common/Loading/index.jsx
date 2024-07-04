import React from 'react';
import styled from 'styled-components';

export default function Loading() {
  return <LoadingSpinner>Loading ...</LoadingSpinner>;
}

const LoadingSpinner = styled.div`
  background-color: aliceblue;
`;
