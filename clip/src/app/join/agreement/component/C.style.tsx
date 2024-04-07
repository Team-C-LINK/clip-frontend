import styled from 'styled-components';

interface checkBoxHoverColor {
  color: string;
}

interface src {
  src: any;
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100%;
  overflow: scroll;
  gap: 5rem;
`;

export const CheckBoxUnSelected = styled.div`
  /*  Check list */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.6rem;
  gap: 1.2rem;

  position: relative;
  width: 91dvw;
  height: 4.4rem;

  border-radius: 0.4rem;

  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2rem;
  text-align: left;
`;

export const CheckBoxLabel = styled.label<src>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:before {
    content: url(${(props) => props.src});
  }
`;

export const CheckBoxLabelTwoLine = styled.label<src>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:before {
    content: url(${(props) => props.src});
  }
`;

export const CheckBoxFrame = styled.div<checkBoxHoverColor>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 89.1dvw;
  padding-left: 2dvw;
  padding-top: 1rem;
  padding-bottom: 1rem;
 
  gap: 1.5rem;

  &:hover {
    background-color: ${(props) => props.color}};
  }
`;

export const Text_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const More_info = styled.span`
  position: absolute;
  font-family: Pretendard;
  text-decoration: underline;
  font-size: 1.2rem;
  font-weight: 400;
  width: 5rem;
  color: #8a8a8a;
  text-align: left;
  right: 0rem;
  top: 1.5rem;
`;

export const Text = styled.span`
  position: relative;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: left;
  left: 2rem;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const AgreementFrame = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2dvh;
  widht: fit-content;
  bottom: 10dvh;
`;

export const TitleFrame = styled.div`
  /* Title */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.8rem;

  position: relative;
  width: 91.1dvw;
  height: fit-content;
`;

export const TitleTopText = styled.div`
  font-family: Pretendard;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: 0.03em;
  text-align: left;
`;

export const TitleBottomText = styled.div`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  text-align: left;
`;

export const DisabledNextButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  position: fixed;
  width: 91.1dvw;
  height: 4.4rem;
  background: #f2f2f2;
  border-radius: 0.4rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #bfbfbf;
  bottom: 2dvh;
`;

export const EnabledNextButton = styled.div`
  /* btn */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1.2rem;

  position: fixed;
  width: 91.1dvw;
  height: 4.4rem;

  /* Background/Dark */
  background: #1d2939;
  border-radius: 0.4rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: #ffffff;
  bottom: 2dvh;
`;
