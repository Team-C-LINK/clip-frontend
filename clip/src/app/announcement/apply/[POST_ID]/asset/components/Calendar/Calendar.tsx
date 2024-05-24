import * as C from './Calendar.style';
import React, { useEffect, useState } from 'react';
import useCalendar from './asset/hook/useCalendar';
import { subMonths } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import getCheckResearchAvailableTime from '@/app/api/get-checkResearchAvailableTime';
import ScheduleType from '@/app/type/ScheduleType';
import AvailableTimeList from './asset/components/AvailableTimeList';
import RequestApplyType from '@/app/type/RequestApplyType';
import Image from 'next/image';
import left from './asset/image/left.svg';
import right from './asset/image/right.svg';
import time from './asset/image/time.svg';
import Divider from '@/app/SharedComponent/Divider/Divider';

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

    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        parseInt(dataset.day!)
      )
    );

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
      <C.month_select_wrap>
        <C.month_select_wrap_inner>
          <Image
            src={left.src}
            alt="left"
            width={15}
            height={15}
            onClick={() => {
              setCurrentDate(subMonths(currentDate, 1));
            }}
          ></Image>
          <div>
            <span>{currentDate.getFullYear()}.</span>
            <span>{currentDate.getMonth() + 1}</span>
          </div>
          <Image
            src={right.src}
            alt="right"
            width={15}
            height={15}
            onClick={() => {
              setCurrentDate(subMonths(currentDate, -1));
            }}
          ></Image>
        </C.month_select_wrap_inner>
      </C.month_select_wrap>
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
            if (date[0])
              return (
                <React.Fragment key={idx * 7 + idx2}>
                  {selectedDate === date[1] ? (
                    <C.Calendar_selected_item>
                      {date[1]}
                    </C.Calendar_selected_item>
                  ) : (
                    <C.Calendar_unselected_item
                      onClick={handleCalendarItem}
                      data-dayofweek={`${idx2}`}
                      data-year={currentDate.getFullYear()}
                      data-month={(currentDate.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')}
                      data-day={date[1]?.toString().padStart(2, '0')}
                    >
                      {date[1]}
                    </C.Calendar_unselected_item>
                  )}
                </React.Fragment>
              );
            else
              return (
                <C.Calendar_disable_item key={idx * 7 + idx2}>
                  {date[1]}
                </C.Calendar_disable_item>
              );
          });
          return weekItem;
        })}
      </C.Calendar_wrap>
      <Divider $size="100%"></Divider>
      {selectedDate !== -1 && (
        <AvailableTimeList
          availableTimeList={
            list?.researchAvailableTimeForEachDay[selectedDayOfWeek]?.Schedules!
          }
          selectedTime={selectedTime}
          handleSelectedTime={handleSelectedTime}
        ></AvailableTimeList>
      )}

      {selectedTime && (
        <>
          <Divider $size="100%"></Divider>
          <C.notice_time>
            <Image src={time.src} alt="time" width={18} height={18}></Image>
            &nbsp; {currentDate.getMonth() + 1}월 {currentDate.getDate()}일
            {parseInt(selectedTime.split(':')[0]) <= 12
              ? ` 오전 ${parseInt(selectedTime.split(':')[0])}시`
              : ` 오후 ${parseInt(selectedTime.split(':')[0]) - 12}시`}
          </C.notice_time>
        </>
      )}
    </>
  );
};

export default Calendar;
