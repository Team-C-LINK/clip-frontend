type ScheduleType = {
  date: date[];
  researchAvailableTimeForEachDay: researchAvailableTimeForEachDayType[];
};

type Schedule = {
  id: number;
  time: string;
};

type researchAvailableTimeForEachDayType = {
  dayOfWeek: string;
  Schedules: Schedule[];
};

type date = {
  date: string;
  dayOfWeek: string;
};

export default ScheduleType;
