import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 8.8rem;
  align-items: center;
  justify-content: center;
  background: #f9fafc;
  border: 1px solid #828282;
  border-radius: 0.4rem;
  gap: 1.2rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
`;

export const row = styled.span`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const counter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 9.8rem;
  align-items: center;
`;
