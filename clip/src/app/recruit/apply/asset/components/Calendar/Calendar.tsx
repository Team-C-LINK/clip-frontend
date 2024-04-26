import styled from 'styled-components';
import { useState } from 'react';
import useCalendar from './hook/useCalendar';
import { subMonths } from 'date-fns';

type testType = {
  [key: number]: string[];
};

const dummyAbleList: testType = {
  1: ['9시', '10시', '13시'],
  2: ['6시', '9시'],
  3: ['17시', '18시'],
  4: ['11시', '4시'],
  5: [],
  6: ['14시', '19시'],
  7: ['9시', '10시'],
};

const Calendar = () => {
  const { calendarList, currentDate, setCurrentDate } = useCalendar();
  const [availableTime, setAvailableTime] = useState<string[]>();
  const [selectedTime, setSelectedTime] = useState();

  const handleCalendarItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const selectedDate = parseInt(e.currentTarget.innerHTML);
    setAvailableTime(dummyAbleList[selectedDate]);
  };

  const handleSelectedTime = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {};

  return (
    <>
      <div>
        <span
          onClick={() => {
            setCurrentDate(subMonths(currentDate, 1));
          }}
        >
          이전
        </span>{' '}
        <span
          onClick={() => {
            setCurrentDate(subMonths(currentDate, -1));
          }}
        >
          다음
        </span>
      </div>
      <div>
        <span>{currentDate.getFullYear()}년</span>
        <span>{currentDate.getMonth() + 1}월</span>
      </div>
      <Calendar_wrap>
        {calendarList?.map((weekList, idx) => {
          const weekItem = weekList.map((date, idx2) => {
            return (
              <Calendar_item key={idx * 7 + idx2} onClick={handleCalendarItem}>
                {date}
              </Calendar_item>
            );
          });
          return weekItem;
        })}
      </Calendar_wrap>
      <AvailableTimeList_wrap>
        {availableTime?.map((val, idx) => {
          return <span key={idx}>{val}</span>;
        })}
      </AvailableTimeList_wrap>
    </>
  );
};

const Calendar_wrap = styled.div`
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

const Calendar_item = styled.div`
  position: relative;
  height: 4rem;
  width: 11.5%;
  background-color: ${(props) => props.theme.BACKGROUND._DISABLE};
`;

const AvailableTimeList_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: fit-content;
  gap: 1rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
  color: ${(props) => props.theme.TEXT._02};
`;

export default Calendar;
