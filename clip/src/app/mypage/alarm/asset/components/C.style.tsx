import styled, { keyframes } from 'styled-components';

type radioState = {
  $checked: boolean;
};

export const alarm_title = styled.div`
  position: relative;
  width: 91.1dvw;
  height: 4.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._02};
`;

export const alarm_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
  height: fit-content;
  align-items: center;
  padding: 1rem 0rem 1rem 0rem;
  margin-bottom: 4rem;
`;

export const alarm_inner_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 91.1dvw;
`;

export const alarm_type = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2}
`;

export const alarm_explain = styled.div`
  position: relative;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
  color: ${(props) => props.theme.TEXT._02};
`;

export const radio_wrap = styled.div<radioState>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 4rem;
  height: 2rem;
  background: ${(props) =>
    props.$checked ? props.theme.PURPLE._01 : props.theme.TEXT._03};
  border-radius: 1rem;
`;

export const radio_circle = styled.div<radioState>`
  position: relative;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  /* Text/02 */
  background: ${(props) => props.theme.BACKGROUND._02};
  transition: 0.2s;
  margin-left: ${(props) => (props.$checked ? '2.2rem' : '0.2rem')};
  /* 01 */
  box-shadow: 0px 1px 2px rgba(27, 40, 54, 0.2);
`;
