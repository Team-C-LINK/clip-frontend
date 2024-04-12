'use client';

import Header from '@/app/SharedComponent/Header/Header';
import HeaderBack from '@/app/SharedComponent/Header/HeaderBack/HeaderBack';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import * as C from './asset/components/C.style';
import { useState } from 'react';
import NavigationBar from '@/app/SharedComponent/NavigationBar/NaivgationBar';

type alarmState = {
  [key: string]: boolean;
  email_event: boolean;
  email_fit: boolean;
  sms_event: boolean;
  sms_fit: boolean;
};

const Alarm = () => {
  const [alarmState, setAlarmState] = useState<alarmState>({
    email_event: false,
    email_fit: false,
    sms_event: false,
    sms_fit: false,
  });

  const handleClick = (e: any) => {
    const targetID = e.currentTarget.id;
    setAlarmState((prev) => {
      return { ...prev, [targetID]: !alarmState[targetID] };
    });
  };

  return (
    <>
      <Spacer height="5.8rem" />
      <Header>
        <HeaderBack text="알림설정" route="/mypage"></HeaderBack>
      </Header>
      <C.alarm_title>이메일</C.alarm_title>
      <C.alarm_wrap>
        <C.alarm_inner_wrap>
          <C.alarm_type>
            <span>혜택 / 이벤트 알림</span>
            <C.radio_wrap
              id={'email_event'}
              $checked={alarmState['email_event']}
              onClick={handleClick}
            >
              <C.radio_circle
                $checked={alarmState['email_event']}
              ></C.radio_circle>
            </C.radio_wrap>
          </C.alarm_type>
          <C.alarm_explain>
            Clip!에서 진행되는 이벤트와 혜텍 등 소식을 <br></br>받을 수
            있습니다.
          </C.alarm_explain>
        </C.alarm_inner_wrap>
        <C.alarm_inner_wrap>
          <C.alarm_type>
            <span>클립 맞춤 정보 알림</span>
            <C.radio_wrap
              id={'email_fit'}
              $checked={alarmState['email_fit']}
              onClick={handleClick}
            >
              <C.radio_circle
                $checked={alarmState['email_fit']}
              ></C.radio_circle>
            </C.radio_wrap>
          </C.alarm_type>
          <C.alarm_explain>
            내 정보 기반 맞춤 연구소식을 받을 수 있습니다.
          </C.alarm_explain>
        </C.alarm_inner_wrap>
      </C.alarm_wrap>
      <C.alarm_title>문자 메세지</C.alarm_title>
      <C.alarm_wrap>
        <C.alarm_inner_wrap>
          <C.alarm_type>
            <span>혜택 / 이벤트 알림</span>
            <C.radio_wrap
              id={'sms_event'}
              $checked={alarmState['sms_event']}
              onClick={handleClick}
            >
              <C.radio_circle
                $checked={alarmState['sms_event']}
              ></C.radio_circle>
            </C.radio_wrap>
          </C.alarm_type>
          <C.alarm_explain>
            Clip!에서 진행되는 이벤트와 혜텍 등 소식을 <br></br>받을 수
            있습니다.
          </C.alarm_explain>
        </C.alarm_inner_wrap>
        <C.alarm_inner_wrap>
          <C.alarm_type>
            <span>혜택 / 이벤트 알림</span>
            <C.radio_wrap
              id={'sms_fit'}
              $checked={alarmState['sms_fit']}
              onClick={handleClick}
            >
              <C.radio_circle $checked={alarmState['sms_fit']}></C.radio_circle>
            </C.radio_wrap>
          </C.alarm_type>
          <C.alarm_explain>
            내 정보 기반 맞춤 연구소식을 받을 수 있습니다.
          </C.alarm_explain>
        </C.alarm_inner_wrap>
      </C.alarm_wrap>
      <NavigationBar state="my"></NavigationBar>
    </>
  );
};

export default Alarm;
