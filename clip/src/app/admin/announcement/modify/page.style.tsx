import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  gap: 2.5rem;
  padding-bottom: 10rem;
  background: #f9fafc;
`;

export const left_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;
  width: 72rem;
  height: fit-content;
  padding: 2rem;
  top: 10rem;
  background-color: #fff;
  border-radius: 0.4rem;
`;
export const right_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 38.4rem;
  height: fit-content;
  top: 10rem;
  background-color: #fff;
  border-radius: 0.4rem;
`;

export const right_wrap_inner = styled.div`
  position: relative;
  display: flex;
  top: 4rem;
  width: 33.6rem;
  height: fit-content;
  flex-direction: column;
  gap: 2.6rem;
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

export const input_calendar = styled.input.attrs({ type: 'text' })`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  width: ${(props) => props.width};
  height: 4.4rem;
  background: #ffffff;

  background-image: url(${(props) => props.src});
  background-position: 30rem center;
  background-repeat: no-repeat;
  padding: 1.2rem 1.5rem;

  border: 0.1rem solid #828282;
  border-radius: 0.4rem;
  outline: none;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
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
  margin-bottom: 3rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B3};
`;

export const add_screening = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
  position: relative;
  width: 15.2rem;
  padding: 0rem 1rem;
  height: 4.4rem;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const cancel = styled.img`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  top: 1.2rem;
  z-index: 2;
  right: 1rem;
`;

export const upload = styled.label`
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
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  flex-shrink: 0;
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
`;

export const upload_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 67.2rem;
  height: fit-content;
  gap: 1rem;
`;

export const erase = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 9.2rem;
  height: 3rem;
  right: 1rem;
  bottom: 2.5rem;
  background: #ff3d00;
  border-radius: 0.8rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B3};
  color: #fff;
`;
