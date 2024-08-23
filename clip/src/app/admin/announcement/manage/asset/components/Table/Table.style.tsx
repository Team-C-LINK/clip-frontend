import styled from 'styled-components';

export const table = styled.table`
  position: relative;
  width: 60rem;
  height: 1rem;
  border-collapse: collapse;
  border-radius: 0.4rem;
  border-style: hidden;
  box-shadow: 0 0 0 1px #ddd;
  overflow: hidden;
  z-index: 1;
  font-family: 'Pretendard';
`;

export const th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f9fafc;
  ${(props) => props.theme.FONT.Medium.B3};
  color: #828282;
`;
