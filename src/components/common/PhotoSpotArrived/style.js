import styled from "styled-components";
import color from "@/styles/color";
import font from "@/styles/font";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  width: 265px;
  height: 48px;
  border-radius: 10px;
  background: #69d2ff;
  border: 0;
  color: white;
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
