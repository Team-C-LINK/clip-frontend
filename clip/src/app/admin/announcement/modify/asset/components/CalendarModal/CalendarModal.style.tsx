import styled from 'styled-components';

export const wrap = styled.div<{ $isOpen: boolean }>`
  box-sizing: border-box;
  position: absolute;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 2;
  top: 8rem;
  width: 27.7rem;
  height: 27.55rem;
  background: #ffffff;
  border: 0.758929px solid #d9d9d9;
  box-shadow: 0px 6.07143px 9.10714px 4.55357px rgba(0, 0, 0, 0.15),
    0px 3.03571px 3.03571px rgba(0, 0, 0, 0.3);
  border-radius: 12.1429px;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B4};
`;

export const Calendar_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 22rem;
  height: fit-content;
`;

export const Calendar_middle_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.277rem;
  width: 2.277rem;
  margin: 0.4rem 0rem;
  padding: 0rem 0.4rem;

  color: ${(props) => props.theme.TEXT._01};
  background: ${(props) => props.theme.PURPLE._04};
`;

export const Calendar_unselected_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.277rem;
  width: 2.277rem;
  padding: 0.4rem;
`;

export const Calendar_selected_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.277rem;
  width: 2.277rem;
  border-radius: 50%;
  color: ${(props) => props.theme.TEXT._04};
  background: ${(props) => props.theme.PURPLE._00};
  padding: 0.4rem;
`;

export const Calendar_disable_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.277rem;
  width: 2.277rem;
  text-decoration: line-through;
  color: ${(props) => props.theme.TEXT._03};
  padding: 0.4rem;
`;

export const month_select_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Pretendard';
  color: ${(props) => props.theme.TEXT._01};
  ${(props) => props.theme.FONT.SemiBold.B4};
`;

export const month_select_wrap_inner = styled.div`
  position: relative;
  display: flex;
  width: 13rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const notice_time = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B2};
`;

export const dummy_div = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;
