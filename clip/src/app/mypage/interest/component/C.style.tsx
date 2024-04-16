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
  justify-content: right;
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

export const view_wrap = styled.div`
  position: relative;
  display: row;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
  flex: 1;
`;
