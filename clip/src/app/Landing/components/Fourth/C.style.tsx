import styled from 'styled-components';

type src = {
  src: string;
  mb: string;
};

export const Frame = styled.div`
  /* 5 */

  position: relative;
  width: 100%;
  z-index: 1;
  height: fit-content;
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
  width: fit-content;
  height: 4.9rem;
  gap: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0rem 2rem 0rem 2rem;
  align-items: center;
  background: #d3e9ff;
  border-radius: 1.2rem;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  text-align: left;
  color: #252525;
`;

export const tail_left_wrap = styled.img`
  position: absolute;
  height: fit-content;
  width: fit-content;
  bottom: 0rem;
  left: -0.6rem;
`;

export const tail_right_wrap = styled.img`
  position: absolute;
  height: fit-content;
  width: fit-content;
  right: -0.5rem;
  bottom: 0rem;
`;

export const conversation_wrap_left = styled.div`
  /* Vector 1 */

  position: relative;
  width: 91.1%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: left;
  right: 5%;
`;

export const conversation_wrap_right = styled.div`
  /* Vector 1 */
  position: relative;
  width: 70%;
  height: fit-content;
  display: flex;

  flex-direction: row;
  justify-content: right;
`;

export const ConversationQuestionFrame_right = styled.div`
  width: fit-content;
  height: fit-content;
  gap: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 2rem 1rem 2rem;
  gap: 1rem;
  background: #f9fafb;
  border-radius: 1.2rem;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  text-align: left;

  color: #252525;
`;

export const answer_wrap = styled.div`
  /* Text */
  position: relative;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  font-size: 1.74rem;
  /* identical to box height, or 129% */

  color: #790de4;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const question_wrap = styled.div`
/* Text */

  position: relative;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  font-size: 1.74rem;
  /* identical to box height, or 129% */
  bottom : 0.1rem;
  color: #252525

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const conversation_set_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 91.1%;
  height: 23rem;
  align-items: center;
  gap: 2rem;
`;

export const clippy_wrap = styled.div`
  position: relative;
  height: fit-content;
  width: 89.1%;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const conversation_clippy_1 = styled.img`
  position: relative;
  right: -3.5rem;
  bottom: 5rem;
`;

export const conversation_clippy_2 = styled.img`
  position: relative;
  right: -3.5rem;
  bottom: 4rem;
`;

export const conversation_clippy_3 = styled.img`
  position: relative;
  right: -3.5rem;
  bottom: 5rem;
`;

export const conversation_all_wrap = styled.div`
  position relative;
  display : flex;
  flex-direction : column;
  width : 100%;
  align-items : center;
  gap : 0rem;
  margin-top : 7rem;
`;
