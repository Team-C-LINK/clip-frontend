import * as C from './Calendar.style';
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
import searchIcon from '@/app/admin/asset/image/searchIcon.svg';
import Divider from '@/app/SharedComponent/Divider/Divider';
import SelectCard from './asset/components/SelectCard/SelectCard';
const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];
const DAYS_OF_WEEKS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
];

const Calendar = () => {
  const { calendarList, currentDate, setCurrentDate } = useCalendar();
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<number>(-1);
  const [selectedDate, setSelectedDate] = useState<number>(-1);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isTimeSelectModalOpen, setIsTimeSelectModalOpen] =
    useState<boolean>(false);

  const handleCalendarItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const dataset = e.currentTarget.dataset;
    const targetDay = parseInt(dataset.dayofweek!);
    const _date = `${dataset.year}-${dataset.month}-${dataset.day}`;
    setSelectedDayOfWeek(targetDay);
    setSelectedDate(parseInt(dataset.day!));
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        parseInt(dataset.month!) - 1,
        parseInt(dataset.day!)
      )
    );
    setSelectedTime('');
  };

  return (
    <>
      <C.month_select_wrap>
        <C.month_select_wrap_inner>
          {currentDate.getMonth() === new Date().getMonth() ? (
            <C.dummy_div></C.dummy_div>
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
            const year = currentDate.getFullYear();
            const month = date[0].toString().padStart(2, '0');
            const day = date[1]?.toString().padStart(2, '0');
            const fullDate = `${year}-${month}-${day}`;

            return (
              <React.Fragment key={idx * 7 + idx2}>
                {selectedDate === date[1] ? (
                  <C.Calendar_selected_item>{date[1]}</C.Calendar_selected_item>
                ) : (
                  <C.Calendar_unselected_item
                    onClick={handleCalendarItem}
                    data-dayofweek={`${idx2}`}
                    data-year={year}
                    data-month={month}
                    data-day={day}
                  >
                    {date[1]}
                  </C.Calendar_unselected_item>
                )}
              </React.Fragment>
            );
          });
          return weekItem;
        })}
      </C.Calendar_wrap>
      <Divider $size="100%"></Divider>
      <C.input_wrap>
        <C.input
          placeholder="시간 설정하기"
          src={searchIcon.src}
          width={'100%'}
          onClick={() => setIsTimeSelectModalOpen(!isTimeSelectModalOpen)}
        ></C.input>
        {isTimeSelectModalOpen && (
          <C.DropdownMenu>
            {DAYS_OF_WEEKS?.map((option, idx) => (
              <C.DropdownItem
                $isLast={idx === DAYS_OF_WEEK.length - 1}
                key={idx}
              >
                {option}
              </C.DropdownItem>
            ))}
          </C.DropdownMenu>
        )}
      </C.input_wrap>
      <SelectCard></SelectCard>
    </>
  );
};

export default Calendar;
