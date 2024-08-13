'use client';

import Layout from './SharedComponent/Background';
import addChannel from '../../public/image/addChannel.svg';
import KaKaoChannel from '../../public/image/KaKaoChannel.svg';
import clipPhoneImage from '../../public/image/ClipPhoneImage.svg';
import Image from 'next/image';
import * as C from './component/C.style';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import LandingPage from './Landing/page';
import Second from './Landing/components/Second/Second';
import Third from './Landing/components/Third/Third';
import Fourth from './Landing/components/Fourth/Fourth';
import Sixth from './Landing/components/Sixth/Sixth';
const Landing = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:899px)',
  });

  const isWeb = useMediaQuery({
    query: '(min-width:900px)',
  });

  return (
    <>
      {isMobile && <LandingPageMobile></LandingPageMobile>}
      {isWeb && <LandingPageWeb></LandingPageWeb>}
    </>
  );
};

const LandingPageMobile = () => {
  const moveToChannel = () => {
    window.location.href = 'https://pf.kakao.com/_uRgmG';
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <C.LandingPageFrame isMobile={true}>
            <C.join_wrap>
              <C.Join onClick={moveToChannel}>실시간 공고 확인하기</C.Join>
            </C.join_wrap>
            <LandingPage></LandingPage>
          </C.LandingPageFrame>
        </>
      )}
    </>
  );
};

const LandingPageWeb = () => {
  const moveToChannel = () => {
    window.location.href = '/announcement';
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <>
        <C.LandingWrapper>
          <C.LeftWrapper>
            <C.LeftInner>
              <C.TopText>
                연구 참여,<br></br>참 쉬운 부업이 되다
              </C.TopText>
              <C.MiddleImageFrame>
                <C.MiddleImage src={clipPhoneImage.src}></C.MiddleImage>
              </C.MiddleImageFrame>
              <C.AddChannelButton onClick={moveToChannel}>
                실시간 공고 확인하기
              </C.AddChannelButton>
            </C.LeftInner>
          </C.LeftWrapper>
          <C.RightWrapper>
            <C.LandingPageFrame isMobile={false}>
              <Second></Second>
              <Third></Third>
              <Fourth></Fourth>
            </C.LandingPageFrame>
          </C.RightWrapper>
        </C.LandingWrapper>
      </>
    );
};

export default Landing;
