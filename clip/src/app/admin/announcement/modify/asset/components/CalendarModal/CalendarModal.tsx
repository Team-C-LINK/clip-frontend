import * as S from './CalendarModal.style';
import React, { useEffect, useState } from 'react';
import useCalendar from './asset/hook/useCalendar';
import { subMonths } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import getCheckResearchAvailableTime from '@/app/api/get-checkResearchAvailableTime';
import ScheduleType from '@/app/type/ScheduleType';
import Image from 'next/image';
import left from './asset/image/left.svg';
import right from './asset/image/right.svg';

const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];

interface CalendarModalProps {
  isCalendarModalOpen: boolean;
  setIsCalendarModalOpen: React.Dispatch<boolean>;
  setStartDate: React.Dispatch<any>;
  setEndDate: React.Dispatch<any>;
  startDate: any;
  endDate: any;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  isCalendarModalOpen,
  setIsCalendarModalOpen,
  setStartDate,
  setEndDate,
  startDate,
  endDate,
}) => {
  const param = useParams();
  const { calendarList, currentDate, setCurrentDate } = useCalendar();
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<number>(-1);
  const [monthList, setMonthList] = useState<number[]>([]);
  const [selectedDate, setSelectedDate] = useState<number>(-1);
  const { data: list } = useQuery<ScheduleType | undefined>({
    queryKey: ['schedule', param.POST_ID, 2024, 6],
    queryFn: getCheckResearchAvailableTime,
  });

  const handleCalendarItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();

    const targetDate = parseInt(
      `${e.currentTarget.dataset.year}${e.currentTarget.dataset.month}${e.currentTarget.dataset.day}`
    );

    if (!startDate) setStartDate(targetDate);
    else {
      if (targetDate < startDate) {
        setStartDate(targetDate);
        setEndDate('');
      }
      if (targetDate > startDate) {
        setEndDate(targetDate);
        setIsCalendarModalOpen(false);
      }
    }
  };

  const getMonths = (list: ScheduleType) => {
    const dateList = list?.date.map((val) => {
      return parseInt(val.date.split('-')[1]);
    });
    const months = dateList?.filter(
      (val, idx, arr) => arr.indexOf(val) === idx
    );
    return months;
  };

  const isDisableDate = (month: number, day: number) => {
    const today = new Date();
    return today.getMonth() === month && day < today.getDate();
  };

  const isSelectedDate = (year: string, month: string, day: string) => {
    return (
      year + month + day === startDate?.toString() ||
      year + month + day === endDate?.toString()
    );
  };

  const isMiddleDate = (year: string, month: string, day: string) => {
    const targetDate = parseInt(year + month + day);

    if (startDate < targetDate && targetDate < endDate) return true;

    return false;
  };

  useEffect(() => {
    const months = getMonths(list!);
    setMonthList(months);
  }, [list]);

  return (
    <S.wrap
      $isOpen={isCalendarModalOpen}
      onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
    >
      <S.month_select_wrap>
        <S.month_select_wrap_inner>
          {currentDate.getMonth() === new Date().getMonth() ? (
            <S.dummy_div></S.dummy_div>
          ) : (
            <Image
              src={left.src}
              alt="right"
              width={15}
              height={15}
              onClick={() => {
                setCurrentDate(subMonths(currentDate, +1));
              }}
            />
          )}
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
        </S.month_select_wrap_inner>
      </S.month_select_wrap>
      <S.Calendar_wrap>
        {DAYS_OF_WEEK.map((val, idx) => {
          return (
            <S.Calendar_unselected_item key={idx}>
              {val}
            </S.Calendar_unselected_item>
          );
        })}
        {calendarList?.map((weekList, idx) => {
          const weekItem = weekList.map((date, idx2) => {
            const curMonth = currentDate.getMonth();
            const year = currentDate.getFullYear();
            const month = date[0].toString().padStart(2, '0');
            const day = date[1]?.toString().padStart(2, '0');
            const showingDay =
              curMonth + 1 === parseInt(month) ? date[1] : null;

            if (!showingDay)
              return (
                <S.Calendar_unselected_item
                  key={idx * 7 + idx2}
                ></S.Calendar_unselected_item>
              );

            if (isDisableDate(date[0] - 1, date[1]))
              return (
                <S.Calendar_disable_item key={idx * 7 + idx2}>
                  {showingDay}
                </S.Calendar_disable_item>
              );

            if (isSelectedDate(year.toString(), month, day))
              return (
                <S.Calendar_selected_item key={idx * 7 + idx2}>
                  {showingDay}
                </S.Calendar_selected_item>
              );

            if (isMiddleDate(year.toString(), month, day))
              return (
                <S.Calendar_middle_item
                  key={idx * 7 + idx2}
                  onClick={handleCalendarItem}
                  data-year={year}
                  data-month={month}
                  data-day={day}
                >
                  {showingDay}
                </S.Calendar_middle_item>
              );

            return (
              <S.Calendar_unselected_item
                key={idx * 7 + idx2}
                onClick={handleCalendarItem}
                data-dayofweek={`${idx2}`}
                data-year={year}
                data-month={month}
                data-day={day}
              >
                {showingDay}
              </S.Calendar_unselected_item>
            );
          });
          return weekItem;
        })}
      </S.Calendar_wrap>
    </S.wrap>
  );
};

export default CalendarModal;
