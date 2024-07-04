import styled from "styled-components";

export const Popup = styled.div`
  width: 393px;
  height: 374px;
  border-radius: 20px 20px 0px 0px;
  border-top: 1px solid #c2c2c2;
  background: #fff;
`;

export const Text = styled.span`
  color: #000;
  font-family: "SUIT Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const NaverMap = styled.div`
  position: relative;
  padding: 8px;
  background: #fff;
`;

export const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-bottom: 53px;
`;

export const FollowSpotButton = styled.button`
  position: absolute;
  right: 35px;
  bottom: 35px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background: #69d2ff;
  border: 0;
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  color: white;
  font-family: "SUIT Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  z-index: 99;
  &:hover {
    transform: scale(1.1);
  }
`;
