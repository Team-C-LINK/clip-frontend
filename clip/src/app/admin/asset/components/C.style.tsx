import styled from 'styled-components';

export const wrap = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 72.4rem;
  height: 64.2rem;
  top: 50%;
  transform: translateY(-50%);
  gap: 5.5rem;
  /* Background/02 */
  background: #ffffff;
  /* 002 */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

export const title = styled.span`
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Header.H3};
  color: #000;
`;

export const id = styled.input.attrs({ type: 'text' })`
  position: relative;
  width: 37rem;
  height: 4.5rem;
  border: 0;
  padding-left: 1.5rem;
  font-family: Pretendard;
  ${(props) => props.theme.FONT.Medium.B3};
  text-align: left;
  color: #252525;
  outline: none;
  border-bottom: 0.1rem solid #d9d9d9;
`;

export const pwd = styled.input.attrs({ type: 'password' })`
  position: relative;
  width: 37rem;
  height: 4.5rem;
  border: 0;
  padding-left: 1.5rem;
  font-family: Pretendard;
  ${(props) => props.theme.FONT.Medium.B3};
  text-align: left;
  color: #252525;
  outline: none;
  border-bottom: 0.1rem solid #d9d9d9;
`;
