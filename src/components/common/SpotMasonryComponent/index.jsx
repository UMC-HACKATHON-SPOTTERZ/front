import Image from "next/image";
import React, { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";
import styled from "styled-components";

import HeartSkyblue from "../../../../public/images/HeartSkyblue.svg";
import axios from "axios";

const StyledImage = styled(Image)`
  position: relative !important;
  height: unset !important;
  cursor: pointer;
`;

const LikeChip = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 52px;
  height: 23px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default function SpotMasonryComponent({ setSelectedData }) {
  /* 사진 배열 */
  const [images, setImages] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccessGeolocation, () => {});
    }

    function onSuccessGeolocation(position) {
      setCurrentPosition([position.coords.longitude, position.coords.latitude]);
    }
  }, []);

  useEffect(() => {
    getImages();
  }, [currentPosition]);

  const getImages = async () => {
    if (currentPosition) {
      const response = await axios.get("/api/spots/list", {
        params: {
          latitude: currentPosition[1],
          longitude: currentPosition[0],
        },
      });

      const responseData = response.data.data;

      setImages(responseData);
    }
  };

  return (
    <Masonry columnsCount={2} gutter="1rem" style={{ padding: "20px" }}>
      {images &&
        images.map((image, index) => (
          <div style={{ position: "relative" }}>
            <StyledImage
              key={index}
              src={image.imgUrl}
              alt=""
              fill
              onClick={() => setSelectedData(image)}
            />
            <LikeChip>
              <Image src={HeartSkyblue} alt="" style={{ width: "16px", height: "16px" }} />
              <span>{image.likeNum || 0}</span>
            </LikeChip>
          </div>
        ))}
      {!images && (
        <span style={{ width: "500px", textAlign: "center" }}>스팟이 아직 없습니다 :(</span>
      )}
    </Masonry>
  );
}
