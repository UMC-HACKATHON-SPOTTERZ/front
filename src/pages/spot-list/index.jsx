import styled from "styled-components";

import spotterz from "../../../public/images/spotterz.svg";
import Person from "../../../public/images/Person.svg";
import GPS from "../../../public/images/GPS.svg";

import Image from "next/image";
import SpotMasonryComponent from "../../components/common/SpotMasonryComponent";
import { useEffect, useState } from "react";
import PhotoSpotDetail from "../../components/common/PhotoSpotDetail";
import { useRouter } from "next/router";
import color from "@/styles/color";

import Loading from "../../../public/icons/loading.svg";

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
  background: ${(props) => (props.selected ? color.primary : "#d9d9d9")};
  color: #fff;
  box-shadow: 0px 4px 1px 0px rgba(0, 0, 0, 0), 0px 3px 1px 0px rgba(0, 0, 0, 0.01),
    0px 2px 1px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.09);
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
  const router = useRouter();
  const [selectedChip, setSelectedChip] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "500px",
            height: "100vh",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <Image
            src={Loading}
            alt=""
            style={{
              fill: "linear-gradient(53deg, rgba(0, 179, 255, 0.14) 3.92%, #FFF 69.43%)",
              width: "32px",
              height: "32px",
              marginBottom: "12px",
              animation: "rotate 2s linear infinite",
            }}
          />
          <div
            style={{
              padding: "10px 43px 10px 43px",
              width: "269px",
              height: "60px",
              borderRadius: "50px",
              background: "rgba(105, 210, 255, 0.50)",
            }}
          >
            <span
              style={{
                color: "#444",
                textAlign: "center",
                fontFamily: "SUIT Variable",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              내 위치 반경 500m 내의
              <br />
              사진 스팟을 검색하고 있어요.
            </span>
          </div>
        </div>
      )}
      <div
        style={{
          padding: "20px",
          paddingTop: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          marginTop: "91px",
        }}
      >
        <Image
          onClick={() => router.push("/")}
          src={spotterz}
          alt=""
          style={{ width: "117px", cursor: "pointer" }}
        />
        <Image
          onClick={() => router.push("/my-page")}
          src={Person}
          alt=""
          style={{ width: "30px", cursor: "pointer" }}
        />
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
        <CategoryChip onClick={() => setSelectedChip("커플")} selected={selectedChip === "커플"}>
          커플
        </CategoryChip>
        <CategoryChip onClick={() => setSelectedChip("풍경")} selected={selectedChip === "풍경"}>
          풍경
        </CategoryChip>
        <CategoryChip onClick={() => setSelectedChip("가족")} selected={selectedChip === "가족"}>
          가족
        </CategoryChip>
        <CategoryChip
          onClick={() => setSelectedChip("반려동물")}
          selected={selectedChip === "반려동물"}
        >
          반려동물
        </CategoryChip>
        <CategoryChip onClick={() => setSelectedChip("친구")} selected={selectedChip === "친구"}>
          친구
        </CategoryChip>
        <CategoryChip onClick={() => setSelectedChip("단독")} selected={selectedChip === "단독"}>
          단독
        </CategoryChip>
      </div>
      <SpotMasonryComponent setSelectedData={setSelectedData} />
      {selectedData && (
        <PhotoSpotDetail selectedData={selectedData} setSelectedData={setSelectedData} />
      )}
    </div>
  );
}
