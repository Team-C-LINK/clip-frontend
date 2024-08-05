import { useState } from 'react';
import generateCalendar from '@/app/utils/generateCalendar';

const useCalendar = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [currentDate, setCurrentDate] = useState(tomorrow);

  const calendarList = generateCalendar(currentDate);

  return {
    calendarList,
    currentDate,
    setCurrentDate,
  };
};

export default useCalendar;
