import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const title = styled.span`
  position: relative;
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  color: #252525;
`;

export const table = styled.table`
  position: relative;
  width: 60rem;
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
