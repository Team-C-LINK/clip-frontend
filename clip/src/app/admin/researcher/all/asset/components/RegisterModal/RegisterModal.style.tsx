import styled from 'styled-components';

export const black_background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 52rem;
  height: 65.6rem;
  left: calc(50% - 52rem / 2);
  top: calc(50% - 65rem / 2);

  background: #ffffff;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  z-index: 3;
`;

export const input_wrap = styled.div`
  position: relative;
  width: 80%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
`;

export const index = styled.span`
  width: 7.4rem;
`;

export const input = styled.input.attrs({ type: 'text' })`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 1.6rem;
  position: relative;
  width: 26.1rem;
  height: 4.5rem;
  background: #f9fafc;
  border: 0rem;
  border-bottom: 1px solid #5d6474;
  outline: none;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
`;

export const title = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Header.H4};
  height: 7rem;
`;

export const upload = styled.span`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  ${(props) => props.theme.FONT.SemiBold.B3};
  position: relative;
  width: 11.2rem;
  height: 4.4rem;
  /* Line/01 */
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const selected_file = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1.6rem;

  position: relative;
  width: 28.4rem;
  height: 4.4rem;

  background: #f2f2f2;
  border-radius: 4px;

  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._03};
`;

export const sumbit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 80%;
  height: 4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._04};

  background: ${(props) => props.theme.BACKGROUND._DARK};
  border-radius: 4px;
`;

export const cancel_button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 4.6rem;
  height: 4.6rem;
  right: 1.8rem;
  top: 1.2rem;
  background: #f2f2f2;
  border-radius: 10rem;
  cursor: pointer;
`;
