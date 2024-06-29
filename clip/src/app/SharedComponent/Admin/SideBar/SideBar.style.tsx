import styled from 'styled-components';

export const wrap = styled.div`
  font-family: 'Pretendard';
  position: relative;
  display: flex;
  flex-direction: column;
  width: 22.8rem;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.LINE._01};
  height: 100%;
  z-index: 1;
`;

export const menu_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  gap: 0.4rem;
`;

export const menu_item_unselected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 18rem;
  height: 4.4rem;

  background: #ffffff;
  border-radius: 0.4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};

  cursor: pointer;

  &:hover {
    ${(props) => props.theme.FONT.Regular.B3};
    background: #f7f2ff;
    color: ${(props) => props.theme.PURPLE._00};
  }
`;

export const menu_item_selected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 18rem;
  height: 4.4rem;

  background: #f7f2ff;
  border-radius: 0.4rem;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B3};
  color: ${(props) => props.theme.PURPLE._00};
`;

export const menu_item_text = styled.span`
  width: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const menu_image = styled.img`
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 2rem;
  background: url(${(props) => props.src});
`;

export const title = styled.span`
  position: relative;
  left: 1.7rem;
  ${(props) => props.theme.FONT.Regular.B4};
  color: ${(props) => props.theme.TEXT._02};
  height: 3rem;
`;
