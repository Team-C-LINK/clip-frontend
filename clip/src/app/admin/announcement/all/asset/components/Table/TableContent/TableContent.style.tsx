import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  width: 100%;
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 0px;
  border-bottom: 1px solid ${(props) => props.theme.LINE._01};
  border-left: 0px;
  border-right: 0px;
`;

export const modify_button = styled.div`
  box-sizing: border-box;
  padding: 0rem 0.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: auto;
  height: 3rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  background: rgba(56, 56, 56, 0.08);
  border-radius: 4px;
  cursor: pointer;
`;

export const tableItem_input = styled.input.attrs({ type: 'text' })`
  padding: 0px;
  width: 9.8rem;
  height: 4rem;
  text-align: center;
  background: #f9fafc;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  outline: none;0
`;

export const td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  ${(props) => props.theme.FONT.Regular.B3};

  &:last-child {
    height: 4.3rem;
    text-align: center;
  }
`;
