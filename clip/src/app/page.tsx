'use client';

import Layout from './SharedComponent/Background';
import addChannel from '../../public/image/addChannel.svg';
import KaKaoChannel from '../../public/image/KaKaoChannel.svg';
import LandingFirst from '../../public/image/LandingFirst.svg';
import LandingSecond from '../../public/image/LandingSecond.svg';
import LandingThird from '../../public/image/LandingThird.svg';
import LandingFourth from '../../public/image/LandingFourth.svg';
import LandingFifth from '../../public/image/LandingFifth.svg';
import LandingSixth from '../../public/image/LandingSixth.svg';
import clipPhoneImage from '../../public/image/ClipPhoneImage.svg';
import styled from 'styled-components';
import * as C from './component/C.style';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

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
          <Join onClick={moveToChannel} src={addChannel.src}></Join>
          <Layout>
            <LandingPageFrame>
              <img src={LandingFirst.src}></img>
              <img src={LandingSecond.src}></img>
              <img src={LandingThird.src}></img>
              <img src={LandingFourth.src}></img>
              <img src={LandingFifth.src}></img>
              <img src={LandingSixth.src}></img>
            </LandingPageFrame>
          </Layout>
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
                  지금 클립 카카오 채널 추가하면,<br></br>
                  베타테스트 이용 가능!
                </C.BottomTopText>
                <C.BottomLowText>
                  *지금은 베타 테스트 운영 기간으로, 카카오 채널을 통해,{' '}
                  <br></br>내 주변 참여 가능 연구 매칭 기능만 임시 제공 됩니다.{' '}
                  <br></br>
                  베타 테스트 신청 혜택은 아래 설명을 참고해 주세요.
                </C.BottomLowText>
              </C.BottomFrame>
              <C.AddChannelButton onClick={moveToChannel}>
                <img src={KaKaoChannel.src}></img>채널 추가 바로가기
              </C.AddChannelButton>
            </C.LeftInner>
          </C.LeftWrapper>
          <C.RightWrapper>
            <img src={LandingSecond.src}></img>
            <img src={LandingThird.src}></img>
            <img src={LandingFourth.src}></img>
            <img src={LandingFifth.src}></img>
            <img src={LandingSixth.src}></img>
          </C.RightWrapper>
        </C.LandingWrapper>
      </>
    );
};

const Join = styled.img`
  position: fixed;
  bottom: -0.3dvh;
  width: 37rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background: url(${(props) => props.src});
`;

const LandingPageFrame = styled.div`
  position: relatve;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  overflow: scroll;
  gap: 0rem;
  left: 50%;
  tranform: translateX(-50%);
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 5rem;
`;

export default Landing;
