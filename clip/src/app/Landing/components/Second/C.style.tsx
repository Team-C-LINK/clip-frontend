import styled from 'styled-components';

type src = {
  src: string;
};

const Frame = styled.div`
  /* 2 */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  background: #1d2939;
  /* 2 */
`;

const FirstTextBox = styled.div<src>`
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

  &::after {
    content: url(${(props) => props.src});
    position: absolute;
    bottom: -2.1rem;
    margin-left: 1rem;
  }
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
  margin-top: 9.7rem;
  margin-bottom: 5rem;
  width: 91.1%;
  height: fit-content;
  justify-content: space-between;
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
  width: 47%;
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

const Icon = styled.img`
  position: relative;
  width: fit-content;
  height: fit-content;
  background: url(${(props) => props.src});
`;

const text_purple = styled.span`
  color: #dcbfff;
`;

const text_highlight = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, #dcbfff 20%);
  font-weight: 700;
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
  text_highlight,
  text_purple,
};
