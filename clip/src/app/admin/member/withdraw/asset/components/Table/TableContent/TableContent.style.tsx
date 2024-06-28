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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 3.5rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  background: #f7f2ff;
  border-radius: 4px;
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
  outline: none;
`;

export const address_wrap = styled.div`
  display: flex;
  width: 21rem;
  gap: 1rem;
  flex-direction: row;
`;

export const confirm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 7rem;
  height: 3.5rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
  color: ${(props) => props.theme.TEXT._04};

  background: #580f9f;
  border-radius: 4px;
`;

export const cancel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 7rem;
  height: 3.5rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
  color: ${(props) => props.theme.TEXT._01};

  background: #f2f2f2;
  border-radius: 4px;
`;

export const confirm_cancel_wrap = styled.div`
  display: flex;
  width: 15rem;
  gap: 1rem;
  flex-direction: row;
`;
