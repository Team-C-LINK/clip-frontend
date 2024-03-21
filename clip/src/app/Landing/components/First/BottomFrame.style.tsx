import styled from 'styled-components';

const BottomFrame = styled.div`
  /* Frame 427319977 */

  /* Auto layout */
  top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 0rem;
  gap: 1.6rem;

  position: relative;
  width: 36.1rem;
  height: fit-content;

  background: #ffffff;
  /* 2 */
  box-shadow: 3rem 2.4rem 15rem rgba(143, 143, 143, 0.01),
    1.7rem 1.4rem 1.3rem rgba(143, 143, 143, 0.05),
    0.8rem 0.6rem 1rem rgba(143, 143, 143, 0.09),
    0.2rem 0.2rem 0.5rem rgba(143, 143, 143, 0.1);
  border-radius: 1.6rem;
`;

const BottomTopText = styled.div`
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

const BottomLowText = styled.div`
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

export { BottomFrame, BottomTopText, BottomLowText };
