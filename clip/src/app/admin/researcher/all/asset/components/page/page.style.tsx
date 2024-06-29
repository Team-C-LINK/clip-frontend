import styled from 'styled-components';

export const manage_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 84.2%;
  height: 100%;
`;

export const wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 2rem;
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
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10rem;
  cursor: pointer;
`;
