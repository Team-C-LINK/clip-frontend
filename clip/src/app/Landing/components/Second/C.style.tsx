import styled from 'styled-components';

const Frame = styled.div`
  /* 2 */

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36rem;
  height: 36rem;
  background: #1d2939;
  /* 2 */
  box-shadow: 30px 24px 15px rgba(143, 143, 143, 0.01),
    17px 14px 13px rgba(143, 143, 143, 0.05),
    8px 6px 10px rgba(143, 143, 143, 0.09), 2px 2px 5px rgba(143, 143, 143, 0.1);
  border-radius: 1.6rem;
`;

const FirstTextBox = styled.div`
  position: relative;
  width: fit-content;
  height: 3.6rem;

  top: 2.8rem;

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 150%;
  text-align: center;

  color: #ffffff;
`;

const SecondTextBox = styled.div`
  position: relative;
  width: 28.1rem;
  height: 4.8rem;
  top: 4rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 150%;
  text-align: center;

  color: #ffffff;
`;

const ThirdFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  top: 9.7rem;
  width: fit-content;
  height: fit-content;
`;

const ThirdFrameInner = styled.div`
  /* Frame 97 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  position: relative;
  width: 15.6rem;
  height: 11.8rem;

  background: #ffffff;
  border-radius: 1.6rem;
`;

const ThirdFrameInnerSecondText = styled.div`
  width: fit-content;
  height: 1.6rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 130%;
  /* identical to box height, or 16px */
  text-align: center;

  color: #475467;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  z-index: 2;
`;

const ThirdFrameInnerThirdText = styled.div`
  width: fit-content;
  height: 3.8rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 160%;
  /* or 38px */
  text-align: center;

  color: #252525;

  /* Inside auto layout */
  flex: none;
  order: 3;
  flex-grow: 0;
  z-index: 3;
`;

const Icon = styled.div`
  position: absolute;
  width: 6.4rem;
  height: 5.8rem;
  left: 28rem;
  top: 1rem;
  background: url(${(props) => props.src});
`;

export {
  Frame,
  FirstTextBox,
  SecondTextBox,
  Icon,
  ThirdFrameInnerSecondText,
  ThirdFrameInnerThirdText,
  ThirdFrame,
  ThirdFrameInner,
};
