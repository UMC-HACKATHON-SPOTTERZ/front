import styled from "styled-components";
import axios from 'axios';

import spotterz from "../../../public/images/spotterz.svg";
import Person from "../../../public/images/Person.svg";
import GPS from "../../../public/images/GPS.svg";

import Image from "next/image";
import SpotMasonryComponent from "../../components/common/SpotMasonryComponent";
import React, { useEffect, useState } from "react";
import PhotoSpotDetail from "../../components/common/PhotoSpotDetail";

const LocationButton = styled.button`
  width: 113px;
  margin: 0 auto;
  height: 46px;
  margin-top: 36px;
  border-radius: 30px;
  border: 0;
  background: #69d2ff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 1px;
`;

const LocationText = styled.span`
  color: #fff;
  font-family: TSCHotplaceGothicOTF;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const CategoryChip = styled.div`
  width: 55px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 30px;
  background: #d9d9d9;
  box-shadow: 0px 4px 1px 0px rgba(0, 0, 0, 0), 0px 3px 1px 0px rgba(0, 0, 0, 0.01),
    0px 2px 1px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.09);
  color: #fff;
  font-family: "SUIT Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export default function SpotList() {
  /* 선택된 사진 */
  const [selectedData, setSelectedData] = useState(null);
  const [likes, setLikes] = useState(0); // 좋아요 수 상태 관리

  const handleLikeClick = async (photoId) => {
    try {
      const response = await axios.post(`/api/v1/spots/like`);
      const updatedLikes = response.data.likes;
      setLikes(updatedLikes);
    } catch (error) {
      console.error('좋아요 요청 실패:', error);
      // 에러 처리 로직 추가
    }
  };
  return (
    <div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          marginTop: "91px",
        }}
      >
        <Image src={spotterz} alt="" style={{ width: "117px" }} />
        <Image src={Person} alt="" style={{ width: "30px", cursor: "pointer" }} />
      </div>
      <LocationButton>
        <Image src={GPS} alt="" style={{ width: "24px" }} />
        <LocationText>선정릉</LocationText>
      </LocationButton>
      <div
        style={{
          marginTop: "24px",
          marginBottom: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <CategoryChip>커플</CategoryChip>
        <CategoryChip>풍경</CategoryChip>
        <CategoryChip>가족</CategoryChip>
        <CategoryChip>반려동물</CategoryChip>
        <CategoryChip>친구</CategoryChip>
        <CategoryChip>단독</CategoryChip>
      </div>
      <SpotMasonryComponent setSelectedData={setSelectedData} />
      {selectedData && (
        <PhotoSpotDetail selectedData={selectedData} setSelectedData={setSelectedData} />
      )}
    </div>
  );
}
