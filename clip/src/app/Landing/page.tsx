'use client';

import Layout from '../components/Background';
import { Frame, LandingPageFrame } from './components/Frame';
import addChannel from '../../../public/image/addChannel.svg';
import LandingFirst from '../../../public/image/LandingFirst.svg';
import LandingSecond from '../../../public/image/LandingSecond.svg';
import LandingThird from '../../../public/image/LandingThird.svg';
import LandingFourth from '../../../public/image/LandingFourth.svg';
import LandingFifth from '../../../public/image/LandingFifth.svg';
import Sixth from './components/Sixth/Sixth';
import styled from 'styled-components';
const LandingPage = () => {
  const moveToChannel = () => {
    window.location.href = 'https://pf.kakao.com/_uRgmG';
  };

  return (
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
  );
};

const Join = styled.img`
  position: fixed;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);

  z-index: 100;
  background: url(${(props) => props.src});
`;

export default LandingPage;
