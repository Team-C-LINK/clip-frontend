import styled from 'styled-components';

type dotted = {
  isDotted: boolean;
};

export const ThirdFrame = styled.div`
  /* 3 */

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 102.8rem;
  background: #ffffff;
  margin-bottom: 7rem;
`;

export const FirstText = styled.span<dotted>`
  position: relative;
  width: fit-content;
  height: fit-content;

  font-family: 'Gmarket Sans Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 150%;
  /* identical to box height, or 36px */
  text-align: center;
  color: #252525;
  text-emphasis: ${(props) => (props.isDotted ? 'filled #252525' : null)};
`;

export const SecondText = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  top: 1.5rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  text-align: center;

  color: #252525;
`;

export const ThirdImage = styled.img`
  position: relative;
  width: 29.4rem;
  height: 15.6rem;
  top: 6rem;
  margin-bottom: 12rem;
  background: url(${(props) => props.src});
`;

export const FourthFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  top: 5rem;
  width: 91.1%;
`;

export const FourthInner = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  gap: 1.6rem;

  position: relative;
  width: 100%;
  height: 10.8rem;
  background: #ffffff;
  border: 0.2rem solid #252525;
  /* 2 */
  box-shadow: 30px 24px 15px rgba(143, 143, 143, 0.01),
    17px 14px 13px rgba(143, 143, 143, 0.05),
    8px 6px 10px rgba(143, 143, 143, 0.09), 2px 2px 5px rgba(143, 143, 143, 0.1);
  border-radius: 1.6rem;
`;

export const FourthInnerImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  position: relative;
  background: url(${(props) => props.src});
`;

export const FourthInnerText = styled.div`
  position : relative;
  width : fit-content
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  text-align: center;
`;

export const FourthInnerCommingSoonInner = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  gap: 1.6rem;
  isolation: isolate;

  position: relative;
  width: 100%;
  height: 10.8rem;
  background: #f0f0f0;
  border-radius: 1.6rem;
`;

export const FourthInnerCommingSoonImage = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  position: relative;
  background: url(${(props) => props.src});
`;

export const FourthInnerCommingSoonText = styled.div`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;

  color: #a7a7a7;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FourthInnerCommingSoon = styled.div`
  /* comingsoon */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  position: absolute;
  width: 91.1%;
  height: 5.6rem;

  opacity: 0.5;
  border: 0.4rem solid #ffbbbb;
  border-radius: 0.8rem;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 2;

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 3.6rem;

  /* identical to box height, or 225% */

  color: #ffbbbb;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FourthBetatestNoticeText = styled.div`
  position: relative;
  width: 32.8rem;
  height: 3.6rem;
  top: 8rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 150%;

  text-align: center;

  color: #475467;
`;
