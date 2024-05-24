import { useState } from 'react';
import generateCalendar from '@/app/utils/generateCalendar';

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const calendarList = generateCalendar(currentDate);

  return {
    calendarList,
    currentDate,
    setCurrentDate,
  };
};

export default useCalendar;
