import styled from 'styled-components';

export const Frame = styled.div`
  /* 5 */

  position: relative;
  width: 35.9rem;
  height: 83.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(180deg, #0f1721 0%, #412173 100%);
  border-radius: 16px 16px 0px 0px;
`;

export const FirstText = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  top: 3.9rem;

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 150%;
  /* or 36px */
  text-align: center;

  color: #ffffff;
`;

export const ConversationFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ConversationFrameInner = styled.div`
  position: relative;
  display: flex;
  flex-direciton: column;
`;

export const ConversationQuestionFrame = styled.div`
  width: 15.8rem;
  height: 4.9rem;
  padding: 1rem 0.1rem 1rem 0.1rem;
  gap: 0.4rem;
  border: 0.053rem 0rem 0rem 0rem;
  background: #d3e9ff;
  border: 0.053rem solid #d3e9ff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  text-align: left;
  color: #252525;
`;
