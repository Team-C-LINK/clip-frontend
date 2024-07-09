import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 77%;
  height: 100dvh;
  gap: 2.5rem;
  background: #f9fafc;
`;

export const left_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
  width: 65%;
  height: 70%;
  top: 10rem;
  background-color: #fff;
  border-radius: 0.4rem;
`;
export const right_wrap = styled.div`
  position: relative;
  width: 35%;
  height: 70%;
  top: 10rem;
  background-color: #fff;
  border-radius: 0.4rem;
`;

export const input_wrap = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 0.6rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
`;

export const index = styled.span`
  width: fit-content;
  color: #616161;
  ${(props) => props.theme.FONT.Regular.B3};
`;

export const input = styled.input.attrs({ type: 'text' })`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  width: ${(props) => props.width};
  height: 4rem;
  background: #ffffff;

  ${(props) =>
    props.src
      ? `background-image: url(${props.src});
  background-position: 1rem center;
  background-repeat: no-repeat;
  padding: 1.2rem 4.5rem
  `
      : `padding: 1.2rem 1.6rem`};

  border: 0.1rem solid #828282;
  border-radius: 0.4rem;
  outline: none;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
`;

export const input_list = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem 0;
`;

export const double_input_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
`;

export const title = styled.span`
  width: 67.2rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Header.H4};
  color: ${(props) => props.theme.TEXT._01};
`;

export const detail = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  font-family: 'Pretendard';
  align-items: center;
  ${(props) => props.theme.FONT.SemiBold.B2};
`;

export const input_textarea = styled.textarea`
  box-sizing: border-box;

  position: relative;
  width: 67.2rem;
  height: 15.1rem;
  resize: none;
  border: 0.1rem solid #828282;
  border-radius: 0.4rem;
  outline: none;
  padding: 1.2rem 1.6rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
`;
