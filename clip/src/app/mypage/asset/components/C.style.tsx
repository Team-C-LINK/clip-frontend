import styled from 'styled-components';

export const view_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 91.1%;
  overflow-y: auto;
`;

export const header_wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const profile_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const profile_right_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const profile_img = styled.img`
  border: 0.1rem solid #d9d9d9;
  height: 5.6rem;
  width: 5.6rem;
  background: url(${(props) => props.src});
  border-radius: 50%;
`;

export const profile_nickname = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 72.8%;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: #252525;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const profile_email = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;

  color: #6c6c6c;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const summary_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 11%;
  justify-content: center;
`;

export const summary_content_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const summary_case = styled.span`
  width: fit-content;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.8rem;

  color: #252525;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const summary_text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  /* identical to box height, or 143% */

  color: #6c6c6c;
`;

export const summary_point = styled.span`
  /* Frame 117 */

  position: relative;
  right: 0.3rem;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 16px;
  height: 16px;

  /* Text/02 */
  background: #6c6c6c;
  border-radius: 50%;
  color: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  font-weight: 200;
  font-size: 1.12rem;
`;

export const divider = styled.div`
  width: 100%;
  height: 0.1rem;

  background: #d9d9d9;
`;

export const body_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 8rem;
`;

export const body_content_wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const body_content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const body_content_title = styled.div`
  width: 100%;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${(props) => props.theme.TEXT._02};

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const body_content_text = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 1rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;

  /* Text/01 */
  color: #252525;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const my_point = styled.span`
  position: absolute;
  right: 0rem;
  /* 내 포인트 */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  /* Regular/B3 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  /* identical to box height, or 143% */

  /* Text/02 */
  color: #6c6c6c;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const logout = styled.span`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 1rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;

  /* Text/01 */
  color: #ff3d00;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
