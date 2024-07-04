import styled from 'styled-components';
import color from '@/styles/color';
import font from '@/styles/font';

export const Button = styled.button`
  width: 27.7rem;
  height: 6.2rem;
  border-radius: 5rem;
  background: ${color.primary};
  border: none;

  color: #fff;
  ${font.title};

  cursor: pointer;

  &:hover {
    background: ${color.primary_50};
  }
`;
