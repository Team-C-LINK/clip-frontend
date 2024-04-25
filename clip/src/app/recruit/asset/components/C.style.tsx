import styled from 'styled-components';

export const view_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
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
  width: 91.1%;
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

export const header_wrap = styled.div`
  position: fixed;
  top: 0rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  z-index: 1;
`;

export const header = styled.div`
  /* Header */

  position: relative;
  width: 100%;
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  /* Line/01 */
  border-bottom: 0.1rem solid #d9d9d9;
`;

export const header_inner_wrap = styled.div`
  position: relative;
  width: 95.5%;
  left: 4.55%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  overflow-x: auto;
`;

export const header_content_selected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  padding: 0rem 1.3rem 0rem 0.8rem;
  height: 3.2rem;
  width: fit-content;
  background: #f7f2ff;
  border: 1px solid #580f9f;
  border-radius: 100px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const header_content_unselected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.5rem 0rem 1.5rem;
  width: fit-content;
  height: 32px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 100px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const header_content_text = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  /* identical to box height, or 143% */
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  /* Purple/00 */
  color: #580f9f;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
/* label-text */

export const test = styled.span`
  color: #580f9f;
`;

export const test2 = styled.span`
  color: #616161;
`; /* label-text */
