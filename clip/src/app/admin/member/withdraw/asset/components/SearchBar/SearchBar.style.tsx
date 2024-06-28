import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 2rem;
  background-color: #f9fafc;
`;

export const search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
  color: ${(props) => props.theme.TEXT._04};

  position: relative;
  width: 9.2rem;
  height: 4rem;

  background: #1d2939;
  border-radius: 0.4rem;
  margin-right: 2.5rem;
`;
