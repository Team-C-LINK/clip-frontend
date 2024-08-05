import styled from 'styled-components';

export const wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  gap: 10rem;
  align-items: center;
  justify-content: center;
  top: 0rem;
  height: 7rem;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(27, 40, 54, 0.2);
  background-color: #fff;
  z-index: 2;
  font-family: 'Pretendard';
`;

export const wrap_inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 77%;
`;

export const category_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const category = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  align-items: center;
  ${(props) => props.theme.FONT.Medium.B3};
  color: #828282;
`;

export const detail_category = styled.span`
  ${(props) => props.theme.FONT.Medium.B3};
  color: ${(props) => props.theme.PURPLE._00};
`;

export const button_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1.6rem;
`;

export const cancel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 8.8rem;
  height: 4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._01};

  background: ${(props) => props.theme.BACKGROUND._DISABLE};
  border-radius: 4px;
`;

export const sumbit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 8.8rem;
  height: 4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.TEXT._04};

  background: ${(props) => props.theme.BACKGROUND._DARK};
  border-radius: 4px;
`;
