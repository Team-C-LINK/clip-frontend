import styled from 'styled-components';

export const manage_wrap_inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
`;

export const manage_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100dvh;
`;

export const list_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const register_new_researcher = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
  right: 0rem;
  width: 14.2rem;
  height: 4.2rem;
  top: 10rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10rem;
  cursor: pointer;
`;

export const total = styled.span`
  position: absolute;
  top: 20rem;
  ${(props) => props.theme.FONT.Regular.B3};
`;
