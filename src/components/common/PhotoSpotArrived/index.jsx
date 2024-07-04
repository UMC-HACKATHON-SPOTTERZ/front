import * as S from "./style";

import ImageCard from "./ImageCard.jpeg";
import Image from "next/image";
import HeartFilled from "./HeartFilled.svg";
import PictureBox from "./PictureBox.svg";

export default function PhotoSpotArrived() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Image
        src={ImageCard}
        alt=""
        style={{
          marginTop: "106px",
          width: "183px",
          height: "267px",
          borderRadius: "5px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 1px 2px 0px rgba(0, 0, 0, 0.10)",
        }}
      />
      <span
        style={{
          marginTop: "25px",
          color: "#69D2FF",
          fontFamily: "SUIT Variable",
          fontSize: "25px",
          fontStyle: "normal",
          fontWeight: 800,
          lineHeight: "normal",
        }}
      >
        스팟에 도착했습니다!
      </span>
      <div
        style={{
          marginTop: "12px",
          color: "#000",
          textAlign: "center",
          fontFamily: "SUIT Variable",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
        }}
      >
        <li>카메라각도는.. 어쩌구저쩌구</li>
        <li>이렇게찍어보세요.</li>
        <li>와정말사진이잘나온다</li>
      </div>
      <div
        style={{
          marginTop: "51px",
          color: "#000",
          textAlign: "center",
          fontFamily: "SUIT Variable",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        }}
      >
        스팟이 만족스러우셨다면 좋아요를 눌러보세요
      </div>
      <S.Button>
        <Image src={HeartFilled} alt="" width="25px" height="25px" />
        로그인하고 좋아요 누르기
      </S.Button>
      <S.Button>
        <Image src={PictureBox} alt="" width="25px" height="25px" />
        로그인하고 사진 업로드하기
      </S.Button>
      <S.Button
        style={{
          marginTop: "45px",
          borderRadius: "10px",
          background: "var(--Blue-sub, #ACE6FF)",
          boxShadow: "0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        다른 스팟 둘러보기
      </S.Button>
    </div>
  );
}
