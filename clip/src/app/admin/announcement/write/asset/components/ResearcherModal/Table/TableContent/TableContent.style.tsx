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

export const profile_button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 3.5rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  background: ${(props) => props.theme.BACKGROUND._01};
  border-radius: 4px;
`;

export const address_wrap = styled.div`
  display: flex;
  width: 21rem;
  gap: 1rem;
  flex-direction: row;
`;

export const profile_wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  box-sizing: border-box;

  width: 15rem;
  height: 15rem;

  background: #ffffff;
  border: 1px solid #d9d9d9;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  z-index: 2;
`;

export const profile_img = styled.img`
  position: relative;
  background: url(${(props) => props.src});

  width: 12.3rem;
  height: 12.3rem;

  border-radius: 0.4rem;
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

export const td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #fff;
  z-index: 2;
  ${(props) => props.theme.FONT.Regular.B3};

  &:last-child {
    height: 4.3rem;
    text-align: center;
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
  margin: auto;
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
