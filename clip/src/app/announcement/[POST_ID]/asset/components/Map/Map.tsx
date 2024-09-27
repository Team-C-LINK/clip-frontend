'use client';

import styled from 'styled-components';
import useMap from '../../hook/useMap';
import Title from '../Title/Title';
import React from 'react';
import PostType from '@/app/type/PostType';
import Script from 'next/script';

const Map = ({ info }: { info?: PostType }) => {
  if (info?.category === '연구/인터뷰') {
    const [city, district, detail] = info?.researchLocation.split(' ');
    if (detail === '온라인') return null;
    return <Maps address={info?.researchLocation}></Maps>;
  } else return null;
};

const Maps = ({ address }: { address?: string }) => {
  useMap(address);

  const handleCopyClipBoard = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    try {
      await navigator.clipboard.writeText(e.currentTarget.innerHTML);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrap>
      <Script
        strategy="lazyOnload"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID}&submodules=geocoder`}
      />
      <Title>연구 장소</Title>
      <div>
        <MapBox id="map"></MapBox>
        <Address>
          <span onClick={handleCopyClipBoard}>{address}</span>
          <Purple>지도보기</Purple>
        </Address>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: fit-content;
  z-index: 0;
`;

const MapBox = styled.div`
  width: 100%;
  height: 14.4rem;
  border-radius: 0.4rem;
`;

const Address = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3.4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
  background: ${(props) => props.theme.BACKGROUND._01};
  color: ${(props) => props.theme.TEXT._01};
  border-radius: 0.4rem;
`;

const Purple = styled.span`
  color: ${(props) => props.theme.PURPLE._01};
`;

export default Map;
