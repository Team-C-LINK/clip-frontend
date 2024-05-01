import * as C from './Calendar.style';
import React, { useState } from 'react';
import useCalendar from './hook/useCalendar';
import { subMonths } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import getCheckResearchAvailableTime from '@/app/api/get-checkResearchAvailableTime';
import ScheduleType from '@/app/type/ScheduleType';
import RequestApplyType from '@/app/type/RequestApplyType';

const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = ({
  setApplyInfo,
}: {
  setApplyInfo: React.Dispatch<React.SetStateAction<RequestApplyType>>;
}) => {
  const param = useParams();
  const { calendarList, currentDate, setCurrentDate } = useCalendar();
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<number>(-1);
  const [selectedDate, setSelectedDate] = useState<number>(-1);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const { data: list } = useQuery<ScheduleType | undefined>({
    queryKey: ['schedule', param.POST_ID, 2024, 4],
    queryFn: getCheckResearchAvailableTime,
  });

  const handleCalendarItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const dataset = e.currentTarget.dataset;
    const targetDay = parseInt(dataset.dayofweek!);
    setSelectedDayOfWeek(targetDay);
    const _date = `${dataset.year}-${dataset.month}-${dataset.day}`;
    setApplyInfo((prev) => ({
      ...prev,
      date: { date: _date },
      scheduleId: -1,
    }));
    setSelectedDate(parseInt(dataset.day!));
    setSelectedTime('');
  };

  const handleSelectedTime = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const selectedTime = e.currentTarget.innerHTML!;
    const _scheduleId = getId(selectedTime)![0].id;
    setApplyInfo((prev) => ({ ...prev, scheduleId: _scheduleId }));
    setSelectedTime(selectedTime);
  };

  const getId = (time: string) => {
    const target = list?.researchAvailableTimeForEachDay[
      selectedDayOfWeek
    ].Schedules.filter((val) => val.time === time);
    return target;
  };

  return (
    <>
      <div>
        <span
          onClick={() => {
            setCurrentDate(subMonths(currentDate, 1));
          }}
        >
          이전
        </span>
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

      <C.Calendar_wrap>
        {DAYS_OF_WEEK.map((val, idx) => {
          return (
            <C.Calendar_unselected_item key={idx}>
              {val}
            </C.Calendar_unselected_item>
          );
        })}
        {calendarList?.map((weekList, idx) => {
          const weekItem = weekList.map((date, idx2) => {
            return (
              <React.Fragment key={idx * 7 + idx2}>
                {selectedDate === date ? (
                  <C.Calendar_selected_item>{date}</C.Calendar_selected_item>
                ) : (
                  <C.Calendar_unselected_item
                    onClick={handleCalendarItem}
                    data-dayofweek={`${idx2}`}
                    data-year={currentDate.getFullYear()}
                    data-month={(currentDate.getMonth() + 1)
                      .toString()
                      .padStart(2, '0')}
                    data-day={date?.toString().padStart(2, '0')}
                  >
                    {date}
                  </C.Calendar_unselected_item>
                )}
              </React.Fragment>
            );
          });
          return weekItem;
        })}
      </C.Calendar_wrap>
      <C.AvailableTimeList_wrap>
        {list?.researchAvailableTimeForEachDay[
          selectedDayOfWeek
        ]?.Schedules?.map(({ time, id }) => {
          return (
            <React.Fragment key={id}>
              {time === selectedTime ? (
                <C.selected_time>{time}</C.selected_time>
              ) : (
                <C.unselected_time
                  data-id={id.toString()}
                  onClick={handleSelectedTime}
                >
                  {time}
                </C.unselected_time>
              )}
            </React.Fragment>
          );
        })}
      </C.AvailableTimeList_wrap>
    </>
  );
};

export default Calendar;
