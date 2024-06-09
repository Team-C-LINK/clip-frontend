import ScheduleItemType from '@/app/type/ScheduleItemType';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AvailableTimeList = ({
  availableTimeList,
  selectedTime,
  handleSelectedTime,
}: {
  availableTimeList: ScheduleItemType[];
  selectedTime: string;
  handleSelectedTime: any;
}) => {
  const [morningList, setMorningList] = useState<ScheduleItemType[]>();
  const [afternoonList, setAfternoonList] = useState<ScheduleItemType[]>();

  useEffect(() => {
    const tempMorningList = availableTimeList?.filter(({ time }) => {
      const [hour, minute] = time.split(':').map(Number);
      return hour <= 12;
    });

    const tempAfternoonList = availableTimeList?.filter(({ time }) => {
      const [hour, minute] = time.split(':').map(Number);
      return hour > 12;
    });

    setAfternoonList(tempAfternoonList);
    setMorningList(tempMorningList);
  }, [availableTimeList]);

  return (
    <>
      {morningList?.length !== 0 && (
        <>
          <Timezone>오전</Timezone>
          <AvailableTimeList_wrap>
            {morningList?.map(({ time, id }) => {
              return (
                <React.Fragment key={id}>
                  {time === selectedTime ? (
                    <Selected_time>{time}</Selected_time>
                  ) : (
                    <Unselected_time
                      onClick={handleSelectedTime}
                      data-time={time}
                    >
                      {time}
                    </Unselected_time>
                  )}
                </React.Fragment>
              );
            })}
          </AvailableTimeList_wrap>
        </>
      )}

      {afternoonList?.length !== 0 && (
        <>
          <Timezone>오후</Timezone>
          <AvailableTimeList_wrap>
            {afternoonList?.map(({ time, id }) => {
              const [hour, minute] = time.split(':').map(Number);
              return (
                <React.Fragment key={id}>
                  {time === selectedTime ? (
                    <Selected_time>
                      {`${hour - 12}:${minute.toString().padStart(2, '0')}`}
                    </Selected_time>
                  ) : (
                    <Unselected_time
                      onClick={handleSelectedTime}
                      data-time={time}
                    >
                      {`${hour - 12}:${minute.toString().padStart(2, '0')}`}
                    </Unselected_time>
                  )}
                </React.Fragment>
              );
            })}
          </AvailableTimeList_wrap>
        </>
      )}
    </>
  );
};

const AvailableTimeList_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  gap: 2rem;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
  color: ${(props) => props.theme.TEXT._02};
`;

const Selected_time = styled.span`
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 44px;

  /* Background/02 */
  background: ${(props) => props.theme.PURPLE._00};
  /* Line/01 */
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: ${(props) => props.theme.TEXT._04};
  flex-shrink: 0;
`;

const Unselected_time = styled.span`
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Regular.B2};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 44px;

  /* Background/02 */
  background: #ffffff;
  /* Line/01 */
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: ${(props) => props.theme.TEXT._01};
  flex-shrink: 0;
`;

const Timezone = styled.span`
  width: 100%;
  ${(props) => props.theme.FONT.Medium.B3};
`;

export default AvailableTimeList;
