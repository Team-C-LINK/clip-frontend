import styled from 'styled-components';

interface IMGTYPE {
  src: any;
}

type isMobile = {
  isMobile: boolean;
};

export const LandingWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100dvw;
  height: 100dvh;
`;

export const LeftWrapper = styled.div`
  position: relaitve;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 60dvw;
  align-items: center;
  background-color: #f1ecfe;
`;

export const RightWrapper = styled.div`
  position: relaitve;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  overflow: scroll;
  width: 40dvw;
  align-items: center;
  background-color: #f9fafb;
`;

export const LeftInner = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  flex-direction: column;
`;

export const TopText = styled.div`
  /* 연구 참여, 참 쉬운 부업이 되다 */

  position: relative;
  width: fit-content;
  height: 9.6rem;

  font-family: 'Gmarket Sans Bold';
  font-style: bold;
  font-weight: 700;
  font-size: 4.2rem;
  line-height: 150%;
  /* or 48px */

  color: #252525;
`;

export const MiddleImageFrame = styled.div`
  position: relative;
  display: flex;
  flex-direciton: row;
  margin-top: 8rem;
  justify-content: center;
`;

export const MiddleImage = styled.div<IMGTYPE>`
  position: relative;
  width: 31.8rem;
  height: 27.9rem;

  background: url(${(props) => props.src});
  background-size: cover;
`;

export const BottomFrame = styled.div`
  /* Frame 427319977 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 0rem;
  gap: 1.6rem;

  position: relative;
  width: 40.9dvw;
  height: fit-content;

  background: #ffffff;
  /* 2 */
  box-shadow: 3rem 2.4rem 15rem rgba(143, 143, 143, 0.01),
    1.7rem 1.4rem 1.3rem rgba(143, 143, 143, 0.05),
    0.8rem 0.6rem 1rem rgba(143, 143, 143, 0.09),
    0.2rem 0.2rem 0.5rem rgba(143, 143, 143, 0.1);
  border-radius: 1.6rem;
`;

export const BottomTopText = styled.div`
  /* text group */

  width: 23rem;
  height: 5.2rem;
  text-align: center;
  font-family: 'pretendard';
  font-weight: 100;
  /* Inside auto layout */
  flex: none;
  font-size: 1.6rem;
  order: 0;
  flex-grow: 0;
`;

export const BottomLowText = styled.div`
  /* text group */

  width: 27rem;
  height: 5.2rem;
  text-align: center;
  font-family: 'pretendard';
  font-weight: 100;
  /* Inside auto layout */
  flex: none;
  font-size: 1.2rem;
  order: 0;
  flex-grow: 0;
`;

export const AddChannelButton = styled.div`
  /* cta */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1.6rem;
  margin-top: 2rem;
  position: relative;
  width: 40.9dvw;
  height: 5.6rem;

  background: #252525;
  border-radius: 4px;

  font-family: Pretendard;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3.6rem;
  color: #fff;
`;

export const join_wrap = styled.div`
  position: fixed;
  bottom: -0.3dvh;
  width: 37rem;
  height: 6.6rem;
  left: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  background-color: #ffffff;
  z-index: 1;
`;

export const Join = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 91.1dvw;
  height: 4.4rem;

  z-index: 1;
  background: #252525;
  border-radius: 4px;

  font-family: Pretendard;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3.6rem;
  color: #fff;
`;

export const LandingPageFrame = styled.div<isMobile>`
  position: relatve;

  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isMobile ? '100%;' : '60.1%')};
  height: auto;
  align-items: center;
  overflow: scroll;
  gap: 5rem;
  left: 50%;
  background: #ffffff;
  tranform: translateX(-50%);
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1;
`;
