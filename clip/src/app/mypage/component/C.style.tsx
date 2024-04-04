import styled from 'styled-components';

export const wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  overflow: scroll;
`;

export const header_wrapper = styled.div`
  position: relative;
  display: flex;
  width 100%;
  height : fit-content;
  flex-direction: column;
  gap : 1.5rem;
  margin-top : 2rem;
`;

export const profile_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 91.1dvw;
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
  width: 91.1dvw;
  gap: 11dvw;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1.1rem;
  font-family: 'Pretendard';
  /* Text/02 */
  background: #6c6c6c;
  border-radius: 50%;
  color: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const divider = styled.div`
  width: 91.1dvw;
  height: 0.1rem;

  background: #d9d9d9;
`;

export const body_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 8rem;
`;

export const body_content_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const body_content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 86.5dvw;
`;

export const body_content_title = styled.div`
  width: 91.1dvw;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  color: #6c6c6c;

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
