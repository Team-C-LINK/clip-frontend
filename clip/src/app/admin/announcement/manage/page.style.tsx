import styled from 'styled-components';

export const wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  gap: 2.5rem;
  background: #f9fafc;
`;

export const middle_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  gap: 3rem;
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

export const category_selected = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 12px;

  position: relative;
  width: 106px;
  height: 42px;

  background: rgba(88, 15, 159, 0.75);
  border: 1px solid #d9d9d9;
  border-radius: 100px;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: #fff;
`;
