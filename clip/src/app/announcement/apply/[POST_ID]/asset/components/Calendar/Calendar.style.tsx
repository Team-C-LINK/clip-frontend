import styled from 'styled-components';

export const Calendar_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 91.1%;
  fit-content;
  background-color: ${(props) => props.theme.PURPLE._01};
  gap: 0.5rem;
  border : 1px solid gray;
`;
export const Calendar_unselected_item = styled.div`
  position: relative;
  height: 4rem;
  width: 11.5%;
  background-color: ${(props) => props.theme.BACKGROUND._DISABLE};
`;

export const Calendar_selected_item = styled.div`
  position: relative;
  height: 4rem;
  width: 11.5%;
  background-color: ${(props) => props.theme.STATUS._POSITIVE};
`;

export const AvailableTimeList_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: fit-content;
  gap: 2rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
  color: ${(props) => props.theme.TEXT._02};
`;

export const selected_time = styled.span`
  width: fit-content;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
  background-color: ${(props) => props.theme.TEXT._02};
  color: white;
`;

export const unselected_time = styled.span`
  width: fit-content;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
`;
