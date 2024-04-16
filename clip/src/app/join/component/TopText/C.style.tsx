import styled from 'styled-components';

export const TitleFrame = styled.div`
  /* Title */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  position: relative;
  width: 91.1dvw;
  height: fit-content;
  margin-top: 4rem;
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
