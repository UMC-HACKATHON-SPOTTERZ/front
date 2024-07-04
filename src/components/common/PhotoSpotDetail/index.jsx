import * as S from './style';
import HeartOutline from './heart_outline.svg';
import HeartFilled from './heart_filled.svg';
import AvatarIcon from './avatar.svg';
import CircleWithStar from './CircleWithStar.svg';
import Image from 'next/image';
import NaverMapComponent from '../NaverMap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ClickOutside from '../ClickOutside';

export default function PhotoSpotDetail({ selectedData, setSelectedData }) {
  /* 경로 저장 */
  const [route, setRoute] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [ImageCard, setImageCard] = useState(null);
  const [title, setTitle] = useState(null);

  // 좋아요
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 목적지 설정
  useEffect(() => {
    if (selectedData) {
      getSpotById();
    }
  }, [selectedData]);

  const getSpotById = async () => {
    const spotId = selectedData.spotId;

    const response = await axios.get("/api/spots/getSpotById", { params: { spotId } });

    const result = response.data.data;

    setImageCard(result.imgUrl);
    setTitle(result.title);
    console.log(`${result.longitude},${result.latitude}`);
    setDestination({ goal: `${result.longitude},${result.latitude}` });
  };


  // 선택된 데이터 변경 시 이미지 업데이트 및 좋아요 상태 초기화
  useEffect(() => {
    if (selectedData) {
      setImageCard(selectedData?.imgUrl); // 선택된 데이터의 이미지 업데이트
      fetchLikeStatus(selectedData.spotId); // 선택된 데이터의 좋아요 상태 초기화 및 좋아요 수 가져오기
    }
  }, [selectedData]);

  // 좋아요 상태 및 좋아요 수 초기화 함수
  const fetchLikeStatus = async spotId => {
    try {
      const response = await axios.get("/api/v1/spots/like");
      setHasLiked(response.data.hasLiked);
      setLikeCount(response.data.likeCount);
    } catch (error) {
      console.error("좋아요 상태 초기화 실패:", error);
    }
  };

  // 좋아요 클릭 핸들러
  const handleLikeClick = async () => {
    try {
      if (hasLiked) {
        await axios.delete("/api/spots/like", {
          userId: parseInt(window.localStorage.getItem("id")), // 실제 사용자 ID로 변경해야 함
          spotId: parseInt(selectedData.spotId),
        });
        setLikeCount(likeCount - 1);
        setHasLiked(false);
      } else {
        await axios.post("/api/spots/like", {
          userId: parseInt(window.localStorage.getItem("id")), // 실제 사용자 ID로 변경해야 함
          spotId: parseInt(selectedData.spotId),
        });
        setLikeCount(likeCount + 1);
        setHasLiked(true);
      }
    } catch (error) {
      console.error("좋아요 요청 실패:", error);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        zIndex: 999,
        width: '500px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'end',
        backdropFilter: 'blur(10px) saturate(180%)',
        WebkitBackdropFilter: 'blur(10px) saturate(180%)',
        backgroundColor: 'rgba(0,0,0, 0.2)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '35px',
          gap: '16px',
        }}
      >
        <Image src={CircleWithStar} alt="" width={56} height={56} />
        <S.Text style={{ fontWeight: 800, fontSize: "20px" }}>{title}</S.Text>
      </div>
      <S.ImageCard>
        {ImageCard && (
          <Image
            src={ImageCard}
            alt=''
            width={183}
            height={267}
            style={{
              width: '183px',
              height: '267px',
              borderRadius: '5px',
              objectFit: 'contain',
            }}
          />
        )}
      </S.ImageCard>
      <ClickOutside onClick={() => setSelectedData(null)}>
        <div
          style={{
            width: '500px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '20px 20px 0px 0px',
            background: '#fff',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {hasLiked ? (
              <Image
                src={HeartFilled}
                alt=''
                onClick={handleLikeClick}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <Image
                src={HeartOutline}
                alt=''
                onClick={handleLikeClick}
                style={{ cursor: 'pointer' }}
              />
            )}
            <S.Text>{likeCount}</S.Text>
            <div style={{ width: '16px' }}></div>
            <Image src={AvatarIcon} alt='' />
            <S.Text>15</S.Text>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <S.Text>현재 위치에서</S.Text>
            <S.Text
              style={{
                color: '#69D2FF',
                fontWeight: 800,
              }}
            >
              {distance}m
            </S.Text>
          </div>
        </div>
        {/* 네이버 지도 */}
        <S.NaverMap>
          <NaverMapComponent
            route={route}
            setRoute={setRoute}
            destination={destination}
            setDistance={setDistance}
          />
          <S.FollowSpotButton>스팟 찾아가기</S.FollowSpotButton>
        </S.NaverMap>
      </ClickOutside>
    </div>
  );
}
