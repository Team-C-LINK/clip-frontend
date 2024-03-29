import styled from 'styled-components';

export const Frame = styled.div`
  /* 2 */

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  background: #ffffff;
  /* 2 */
  border-radius: 1.6rem;
  margin-bottom: 5rem;
`;

export const BottomFrame = styled.div`
  /* Frame 427319977 */

  /* Auto layout */
  top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 0rem;
  gap: 1.6rem;

  position: relative;
  width: 91.1%;
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
  font-family: 'Pretendard';
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
  font-family: 'Pretendard';
  font-weight: 100;
  /* Inside auto layout */
  flex: none;
  font-size: 1.2rem;
  order: 0;
  flex-grow: 0;
  line-height: 150%;
`;

export const MiddleImage = styled.img`
  position: relative;
  width: fit-content;
  height: fit-content;
  top: 10rem;
  background: url(${(props) => props.src});
  background-size: cover;
`;

export const TopText = styled.div`
  /* 연구 참여, 참 쉬운 부업이 되다 */

  position: relative;
  width: 91.1%;
  height: 9.6rem;
  top: 9.4rem;
  margin-bottom: 1rem;
  font-family: 'Gmarket Sans Bold';
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 150%;
  /* or 48px */

  color: #252525;
`;

export const text_highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 77%, #dcbfff 23%);
  font-weight: 700;
`;
