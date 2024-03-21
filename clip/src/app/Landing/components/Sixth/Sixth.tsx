'use client';

import LandingSixth from '../../../../../public/image/LandingSixth.svg';
import JoinEvent from '../../../../../public/image/JoinEvent.svg';
import styled from 'styled-components';

const Sixth = () => {
  const moveToChannel = () => {
    window.location.href = 'https://pf.kakao.com/_uRgmG';
  };

  return (
    <>
      <Frame>
        <img src={LandingSixth.src}></img>
        <JoinEventButton
          onClick={moveToChannel}
          src={JoinEvent.src}
        ></JoinEventButton>
      </Frame>
    </>
  );
};

const Frame = styled.div`
  position: relative;
`;

const JoinEventButton = styled.div`
  position: absolute;
  width: 32.8rem;
  height: 4.4rem;
  background-color: red;
  top: 45.8rem;
  left: 1.6rem;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
`;

export default Sixth;
