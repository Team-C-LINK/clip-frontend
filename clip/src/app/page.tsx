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
              <C.Join onClick={moveToChannel}>
                <Image
                  src={KaKaoChannel.src}
                  alt={'KaKaoChannel'}
                  width={28}
                  height={28}
                ></Image>
                채널 추가 바로가기
              </C.Join>
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
    window.location.href = 'https://pf.kakao.com/_uRgmG';
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
              <C.BottomFrame>
                <C.BottomTopText>
                  지금 클립 <strong>카카오 채널</strong> 추가하면,<br></br>
                  <strong>베타테스트</strong> 이용 가능!
                </C.BottomTopText>
                <C.BottomLowText>
                  *지금은 베타 테스트 운영 기간으로, 카카오 채널을 통해,{' '}
                  <br></br>내 주변 참여 가능 연구 매칭 기능만 임시 제공 됩니다.{' '}
                  <br></br>
                  베타 테스트 신청 혜택은 아래 설명을 참고해 주세요.
                </C.BottomLowText>
              </C.BottomFrame>
              <C.AddChannelButton onClick={moveToChannel}>
                <Image
                  src={KaKaoChannel.src}
                  alt={'KaKaoChannel'}
                  width={28}
                  height={28}
                ></Image>
                채널 추가 바로가기
              </C.AddChannelButton>
            </C.LeftInner>
          </C.LeftWrapper>
          <C.RightWrapper>
            <C.LandingPageFrame isMobile={false}>
              <Second></Second>
              <Third></Third>
              <Fourth></Fourth>
              <Sixth></Sixth>
            </C.LandingPageFrame>
          </C.RightWrapper>
        </C.LandingWrapper>
      </>
    );
};

export default Landing;
