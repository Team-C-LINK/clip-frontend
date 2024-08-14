import * as C from './Calendar.style';
import React, { useEffect, useState } from 'react';
import useCalendar from './asset/hook/useCalendar';
import { subMonths } from 'date-fns';
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

interface SelectCardInfo {
  detail: string;
  person: number;
}

interface CalendarProps {
  startDate: number;
  endDate: number;
}

type SelectedDateType = {
  year: string;
  month: string;
  day: string;
};

type ReserveInfoType = {
  date: string;
  time: SelectCardInfo[];
};

const Calendar: React.FC<CalendarProps> = ({ startDate, endDate }) => {
  const { calendarList, currentDate, setCurrentDate } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<SelectedDateType>({
    year: '',
    month: '',
    day: '',
  });
  const [isTimeSelectModalOpen, setIsTimeSelectModalOpen] =
    useState<boolean>(false);

  const [reserveInfo, setReserveInfo] = useState<ReserveInfoType[]>([]);
  const handleCalendarItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const dataset = e.currentTarget.dataset;
    const targetDay = parseInt(dataset.dayofweek!);
    const _date = `${dataset.year}-${dataset.month}-${dataset.day}`;

    // setSelectedDayOfWeek(targetDay);
    setSelectedDate({
      year: dataset.year!,
      month: dataset.month!,
      day: dataset.day!,
    });
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        parseInt(dataset.month!) - 1,
        parseInt(dataset.day!)
      )
    );
  };

  const findIdx = (date: string) => {
    const idx = reserveInfo.findIndex((item) => item.date === date);
    return idx;
  };

  const isValidDate = (
    startDate: number,
    endDate: number,
    year: number,
    month: string,
    day: string
  ): boolean => {
    const str = `${year}${month}${day}`;

    const dateNumber = parseInt(str);

    if (startDate <= dateNumber && dateNumber <= endDate) return true;

    return false;
  };

  const handleSelectTime = (e: React.MouseEvent<HTMLDivElement>) => {
    /**
     * 1. 이미 존재하는 날짜라면 배열만 업데이트
     * 2. 존재하지 않는 날짜라면 새롭게 추가
     * 3. 시간을 설정하면 모달이 닫기
     * 4. 업데이트 해주기
     */
    const _date = `${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`;
    const selectTime = e.currentTarget.innerHTML;
    const idx = findIdx(_date);

    if (idx === -1) {
      const ddd = reserveInfo.slice(0);
      ddd.push({ date: _date, time: [{ detail: selectTime, person: 1 }] });
      setReserveInfo(ddd);
    }

    if (idx >= 0) {
      const target = reserveInfo.slice(0);
      const timeIdx = target[idx].time.findIndex(
        (item) => item.detail === selectTime
      );
      if (timeIdx === -1) {
        target[idx].time.push({ detail: selectTime, person: 1 });
      }
      setReserveInfo(target);
    }

    setIsTimeSelectModalOpen(false);
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
            const reserveInfoIdx = findIdx(fullDate);

            if (isValidDate(startDate, endDate, year, month, day)) {
              return (
                <React.Fragment key={idx * 7 + idx2}>
                  {parseInt(selectedDate?.day) === date[1] ? (
                    <C.Calendar_selected_item>
                      {date[1]}
                    </C.Calendar_selected_item>
                  ) : (
                    <C.Calendar_unselected_item
                      onClick={handleCalendarItem}
                      data-dayofweek={`${idx2}`}
                      data-year={year}
                      data-month={month}
                      data-day={day}
                    >
                      {date[1]}
                      {reserveInfoIdx >= 0 && (
                        <C.calendar_item_person>
                          {reserveInfo[reserveInfoIdx]?.time.reduce(
                            (cur, acc) => {
                              return cur + acc.person;
                            },
                            0
                          )}
                          명
                        </C.calendar_item_person>
                      )}
                    </C.Calendar_unselected_item>
                  )}
                </React.Fragment>
              );
            } else
              return (
                <React.Fragment key={idx * 7 + idx2}>
                  <C.Calendar_disable_item>{date[1]}</C.Calendar_disable_item>
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
                onClick={handleSelectTime}
              >
                {option}
              </C.DropdownItem>
            ))}
          </C.DropdownMenu>
        )}
      </C.input_wrap>
      {reserveInfo[
        findIdx(
          `${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`
        )
      ]?.time.map((val, idx) => {
        return (
          <SelectCard
            key={idx}
            date={selectedDate}
            info={val}
            reserveInfo={reserveInfo}
            setReserveInfo={setReserveInfo}
          ></SelectCard>
        );
      })}
    </>
  );
};

export default Calendar;
