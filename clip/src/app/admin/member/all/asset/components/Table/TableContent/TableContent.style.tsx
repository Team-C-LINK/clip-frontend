import styled from 'styled-components';

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
  outline: none;
`;

export const th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  ${(props) => props.theme.FONT.Regular.B3};

  &:last-child {
    display: flex;
    height: 4.3rem;
    justify-content: center;
    align-items: center;
    border: 0;
  }
`;

export const modify_button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: rgba(56, 56, 56, 0.08);
  border-radius: 0.8rem;
`;

export const modify_mode_wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const save_button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  margin: 0 auto;
  width: 4.8rem;
  height: 3.2rem;

  background: #f7f2ff;
  border-radius: 0.8rem;

  color: #580f9f;
  ${(props) => props.theme.FONT.SemiBold.B3};
`;

export const cancel_button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: rgba(56, 56, 56, 0.08);
  border-radius: 0.8rem;
`;
