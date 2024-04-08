import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const filter_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.4rem;

  background: #ffffff;
  /* Line/01 */
  border-bottom: 0.1rem solid #d9d9d9;
`;
export const filter_inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
  width: 91.1dvw;
`;

export const filter_status_wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 1.6rem;

  position: relative;
  width: fit-content;
  height: 2.6rem;
`;

export const filter_text_selected = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.5rem;
  width: fit-content;
  height: 2.6rem;

  border-radius: 0.4rem;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: rgba(37, 37, 37, 0.08);
`;

export const filter_text_unselected = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.5rem;
  width: fit-content;
  height: 2.6rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;

  color: #6c6c6c;
`;

export const filter_recruiting_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;

export const filter_recruiting_text = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
`;

export const list_wrap = styled.div`
  position: relative;
  display: row;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  flex: 1;
`;

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
