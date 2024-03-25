import styled from 'styled-components';

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

export const Test = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
