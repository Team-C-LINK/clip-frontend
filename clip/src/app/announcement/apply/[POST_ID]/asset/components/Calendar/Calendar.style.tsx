import styled from 'styled-components';

export const Calendar_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 31.6rem;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
`;
export const Calendar_unselected_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4.4rem;
  width: 4.4rem;
`;

export const Calendar_selected_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 50%;
  color: ${(props) => props.theme.TEXT._04};
  background: ${(props) => props.theme.PURPLE._00};
`;

export const Calendar_disable_item = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4.4rem;
  width: 4.4rem;
  text-decoration: line-through;
  color: ${(props) => props.theme.TEXT._03};
`;

export const month_select_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B2};
  color: ${(props) => props.theme.TEXT._01};
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
