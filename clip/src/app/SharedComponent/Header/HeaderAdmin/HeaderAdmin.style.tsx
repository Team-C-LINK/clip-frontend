import styled from 'styled-components';

export const wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0rem;
  height: 7rem;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(27, 40, 54, 0.2);
  background-color: ${(props) => props.theme.BACKGROUND._01};
  z-index: 2;
`;

export const wrap_inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 4.4rem;
  width: 78.3%;
`;

export const profile_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  right: 4rem;
  gap: 1rem;
`;

export const profile_name = styled.span`
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
`;
