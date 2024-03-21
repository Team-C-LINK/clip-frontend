'use client';

import Layout from './components/Background';
import { Frame, LandingPageFrame } from './Landing/components/Frame';
import addChannel from '../../public/image/addChannel.svg';
import LandingFirst from '../../public/image/LandingFirst.svg';
import LandingSecond from '../../public/image/LandingSecond.svg';
import LandingThird from '../../public/image/LandingThird.svg';
import LandingFourth from '../../public/image/LandingFourth.svg';
import LandingFifth from '../../public/image/LandingFifth.svg';
import Sixth from './Landing/components/Sixth/Sixth';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Landing = () => {
  return (
    <>
      <LandingPageMobile></LandingPageMobile>
    </>
  );
};

const LandingPageMobile = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:500px)',
  });

  const moveToChannel = () => {
    window.location.href = 'https://pf.kakao.com/_uRgmG';
  };

  return (
    <>
      <>
        <Join onClick={moveToChannel} src={addChannel.src}></Join>
        <Layout>
          <LandingPageFrame>
            <img src={LandingFirst.src}></img>
            <img src={LandingSecond.src}></img>
            <img src={LandingThird.src}></img>
            <img src={LandingFourth.src}></img>
            <img src={LandingFifth.src}></img>
            <Sixth></Sixth>
          </LandingPageFrame>
        </Layout>
      </>
    </>
  );
};

const LandingPageWeb = () => {
  const isWeb = useMediaQuery({
    query: '(min-width:501px)',
  });

  return <>{isWeb && <>웹 입니다</>}</>;
};

const Join = styled.img`
  position: fixed;
  bottom: -0.3dvh;
  left: 50%;
  transform: translateX(-50%);

  z-index: 100;
  background: url(${(props) => props.src});
`;

export default Landing;
