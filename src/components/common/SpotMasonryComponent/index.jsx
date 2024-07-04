import Image from "next/image";
import React, { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";
import styled from "styled-components";

import HeartSkyblue from "../../../../public/images/HeartSkyblue.svg";

const StyledImage = styled(Image)`
  position: relative !important;
  height: unset !important;
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

export default function SpotMasonryComponent() {
  /* 사진 배열 */
  const [images, setImages] = useState(null);

  useEffect(() => {
    setImages([
      {
        likes: 53,
        url: "/images/dummy_images/dummy1.jpeg",
      },
      {
        likes: 19,
        url: "/images/dummy_images/dummy2.jpeg",
      },
      {
        likes: 33,
        url: "/images/dummy_images/dummy3.jpeg",
      },
      {
        likes: 27,
        url: "/images/dummy_images/dummy4.jpeg",
      },
    ]);
  }, []);

  return (
    <Masonry columnsCount={2} gutter="1rem">
      {images &&
        images.map((image, index) => (
          <div style={{ position: "relative" }}>
            <StyledImage key={index} src={image.url} alt="" fill />
            <LikeChip>
              <Image src={HeartSkyblue} alt="" style={{ width: "16px", height: "16px" }} />
              <span>{image.likes}</span>
            </LikeChip>
          </div>
        ))}
    </Masonry>
  );
}
