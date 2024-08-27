'use client';

import Layout from '../SharedComponent/Background';
import { Wrapper, LandingPageFrame } from './components/Frame';
import addChannel from '../../../public/image/addChannel.svg';
import First from './components/First/page';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import Fourth from './components/Fourth/Fourth';
import Sixth from './components/Sixth/Sixth';
import styled from 'styled-components';

const LandingPage = () => {
  const moveToChannel = () => {
    window.location.href = 'https://pf.kakao.com/_uRgmG';
  };
  return (
    <>
      <First></First>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
    </>
  );
};

const Join = styled.img`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: -0.3dvh;
  z-index: 100;
  background: url(${(props) => props.src});
`;

export default LandingPage;
