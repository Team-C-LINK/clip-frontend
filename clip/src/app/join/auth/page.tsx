'use client';
import TopText from '../component/TopText/TopText';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import Layout from '@/app/SharedComponent/Background';
import * as C from './component/C.style';
import PrevNext from '../component/PrevNext/PrevNext';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';

const PHONE_REGEX = /^01([0|1|6|7|8|9]?)-([0-9]{3,4})-([0-9]{4})$/i;
const AUTH_REGEX = /^\d{4}$/i;
const getAuthCode = async () => {}; // 인증번호 전송 api 코드

const postAuthentication = async () => {}; // 인증번호 확인 api 코드

const Auth = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const [timeState, setTimeState] = useState(5);
  const timerRef = useRef<any>(0);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeState((prevTime) => prevTime - 1);
    }, 1000);
  };

  const getTime = (time: number) => {
    const m = Math.floor(time / 60);
    let s: number | string = time - m * 60;
    s = String(s).padStart(2, '0');
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (timeState <= 0) return clearTimeout(timerRef.current);
  }, [timeState]);

  return (
    <>
      <Layout>
        <C.Wrapper>
          <ProgressBar page={2}></ProgressBar>
          <TopText
            top={'본인인증'}
            bottom={'본인 확인을 위해 휴대전화 번호를 입력해주세요'}
          ></TopText>
          <C.phoneNumber_wrap>
            <C.phoneNumber
              placeholder="010-0000-0000"
              {...register('phoneNumber', {
                pattern: {
                  value: PHONE_REGEX,
                  message: '올바르지 않은 형식이에요',
                },
              })}
              id="phoneNumber"
            ></C.phoneNumber>
            {!watch('phoneNumber') ||
            errors.phoneNumber?.message?.toString() ? (
              <C.getAuthDisable>인증번호 받기</C.getAuthDisable>
            ) : (
              <C.getAuth>인증번호 받기</C.getAuth>
            )}
          </C.phoneNumber_wrap>
          <C.auth_wrap>
            <C.phoneNumber_wrap>
              <C.phoneNumber
                placeholder="인증번호 4자리"
                {...register('authCode', {
                  pattern: {
                    value: AUTH_REGEX,
                    message: '올바르지 않은 형식이에요',
                  },
                })}
              ></C.phoneNumber>
              {!watch('authCode') || errors.authCode?.message?.toString() ? (
                <C.getAuthDisable>인증하기</C.getAuthDisable>
              ) : (
                <C.getAuth>인증하기</C.getAuth>
              )}
            </C.phoneNumber_wrap>
            <C.authsend_text>
              인증번호가 발송되었습니다. 유효시간 {getTime(timeState)}
            </C.authsend_text>
          </C.auth_wrap>

          <PrevNext></PrevNext>
        </C.Wrapper>
      </Layout>
    </>
  );
};

export default Auth;
