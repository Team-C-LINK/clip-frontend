import styled from 'styled-components';

export const list_content_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 15rem;
  width: 100%;
  border-bottom: 0.1rem solid #d9d9d9;
`;

export const list_content_wrap_inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 91.1dvw;
  height: fit-content;
`;

export const list_content_recruit_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  gap: 1.3rem;
  align-items: center;
`;

export const list_content_recruit_state = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #07a320;

  width: 4rem;
  height: 2.2rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  background-color: rgba(0, 191, 64, 0.08);
  border-radius: 0.4rem;
  letter-spacing: 0.03em;
  color: #00bf40;
`;

export const list_content_recruit_state_done = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #07a320;

  width: 3rem;
  height: 2.2rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  background-color: rgba(108, 108, 108, 0.08);
  border-radius: 0.4rem;
  letter-spacing: 0.03em;
  color: #6c6c6c;
`;

export const list_content_recruit_deadline = styled.span`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: #6c6c6c;
`;

export const list_content_title = styled.span`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;

  color: #252525;
`;

export const list_content_condition = styled.span`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;

  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: #6c6c6c;
`;

export const list_content_reward_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  gap: 1rem;
  align-items: center;
`;

export const list_content_reward = styled.span`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;

  color: #252525;
`;

export const list_content_middle_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: fit-content;
  height: fit-content;
`;

export const list_content_condition_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;

export const list_content_interested = styled.img`
  position: absolute;
  width: fit-content;
  height: fit-content;
  right: 0rem;
  background: url(${(props) => props.src});
`;
