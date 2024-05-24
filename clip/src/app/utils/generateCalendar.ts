import { subMonths } from 'date-fns';

export default function generateCalendar(date: Date) {
  const prevMonth = subMonths(date, 1);

  const lastDayOfPrevMonth = new Date(
    prevMonth.getFullYear(),
    prevMonth.getMonth() + 1,
    0
  ).getDate();

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);

  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const calendar = [];
  let week = [];

  // Add empty days for the first week
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    week.push([false, lastDayOfPrevMonth - firstDayOfMonth.getDay() + 1 + i]);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push([true, day]);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  // Add remaining days from the last week
  if (week.length > 0) {
    let start = 1;
    while (week.length < 7) {
      week.push([false, start++]);
    }
    calendar.push(week);
  }

  return calendar;
}
