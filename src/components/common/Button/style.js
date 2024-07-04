import styled from 'styled-components';
import color from '@/styles/color';

export const Button = styled.button`
  width: 27.7rem;
  height: 6.2rem;
  border-radius: 5rem;
  background: ${color.primary};
  border: none;

  color: #fff;
  font-family: 'SUIT Variable';
  font-size: 2rem;
  font-weight: 800;

  cursor: pointer;

  &:hover {
    background: ${color.primary_50};
  }
`;
