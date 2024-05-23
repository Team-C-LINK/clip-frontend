import ScheduleItemType from './ScheduleItemType';

type ScheduleType = {
  date: date[];
  researchAvailableTimeForEachDay: researchAvailableTimeForEachDayType[];
};

type researchAvailableTimeForEachDayType = {
  dayOfWeek: string;
  Schedules: ScheduleItemType[];
};

type date = {
  date: string;
  dayOfWeek: string;
};

export default ScheduleType;
