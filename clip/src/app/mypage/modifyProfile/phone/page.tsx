'use client';
import TopText from '@/app/join/component/TopText/TopText';
import * as C from './assets/component/C.style';
import NextButton from '@/app/join/component/PrevNext/NextButton/NextButton';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';
import check from './assets/image/check.svg';
import { useRouter } from 'next/navigation';
import phoneNumberFormatter from './assets/utils/phoneNumberFormatter';
import postModifyGetAuthPhone from '@/app/api/post-modifyGetAuthPhone';
import Image from 'next/image';
import Header from '@/app/SharedComponent/Header/Header';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import { Footer } from '@/app/SharedComponent/Footer/Footer.style';
import postModifyCheckAuthPhone from '@/app/api/post-modifyCheckAuthPhone';

const PHONE_REGEX = /^01([0|1|6|7|8|9]?)-([0-9]{3,4})-([0-9]{4})$/i;
const AUTH_REGEX = /^\d{4}$/i;

const Auth = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const router = useRouter();
  const [timeState, setTimeState] = useState(300);
  const [isValid, setIsValid] = useState(false);
  const [authCodeState, setAuthCodeState] = useState<number>(0);
  const timerRef = useRef<any>(0);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeState((prevTime) => prevTime - 1);
    }, 1000);
  };

  const requestAuthCode = async () => {
    const phoneNumber = watch('phoneNumber').replace(/-/g, '');
    const id = parseInt(localStorage.getItem('id')!);
    const request = {
      phoneNumber: phoneNumber,
    };
    if (await postModifyGetAuthPhone(request)) {
      startTimer();
      setAuthCodeState(1);
    }
  };

  const requestCheckAuth = async () => {
    const phone = watch('phoneNumber').replace(/-/g, '');

    const request = {
      phoneNumber: phone,
      verificationNumber: watch('verificationNumber'),
    };

    const res = await postModifyCheckAuthPhone(request);

    if (res?.status === 204) window.location.href = '/mypage/modifyProfile';
    else alert('인증이 올바르지 않습니다. 다시 시도해주세요.');
  };

  const handlePhoneNumberChange = (e: any) => {
    const formattedPhoneNumber = phoneNumberFormatter(e.target.value);
    setValue('phoneNumber', formattedPhoneNumber);
  };

  const getTime = (time: number) => {
    const m = Math.floor(time / 60);
    let s: number | string = time - m * 60;
    s = String(s).padStart(2, '0');
    return `${m}:${s}`;
  };

  const authCodeComponent = [
    null,
    <C.authsend_text key={1}>
      인증번호가 발송되었습니다. 유효시간 {getTime(timeState)}
    </C.authsend_text>,
    <C.auth_done_text key={2}>
      <Image src={check.src} alt="check" width={16} height={16} />
      인증이 완료되었습니다.
    </C.auth_done_text>,
  ];

  useEffect(() => {
    if (timeState <= 0) return clearTimeout(timerRef.current);
  }, [timeState]);

  return (
    <>
      <Spacer height="5.6rem"></Spacer>
      <Header>
        <HeaderCancel route={'/mypage/modifyProfile'} text=""></HeaderCancel>
      </Header>
      <TopText
        top={'전화번호 변경'}
        bottom={'본인 확인을 위해 휴대전화 번호를 입력해주세요'}
      ></TopText>
      <C.auth_wrap>
        <C.phoneNumber_wrap>
          <C.phoneNumber
            placeholder="010-0000-0000"
            {...register('phoneNumber', {
              pattern: {
                value: PHONE_REGEX,
                message: '올바르지 않은 형식이에요',
              },
              onChange: handlePhoneNumberChange,
            })}
            id="phoneNumber"
          ></C.phoneNumber>
          {!watch('phoneNumber') || errors.phoneNumber?.message?.toString() ? (
            <C.getAuthDisable>인증번호 받기</C.getAuthDisable>
          ) : (
            <C.getAuth onClick={requestAuthCode}>인증번호 받기</C.getAuth>
          )}
        </C.phoneNumber_wrap>
        <C.phoneNumber_wrap>
          <C.certification
            placeholder="인증번호 6자리"
            {...register('verificationNumber', {
              pattern: {
                value: AUTH_REGEX,
                message: '올바르지 않은 형식이에요',
              },
            })}
          ></C.certification>
        </C.phoneNumber_wrap>
        {authCodeComponent[authCodeState]}
      </C.auth_wrap>
      <Footer>
        <NextButton onClick={requestCheckAuth} $size={'91.1%'}>
          완료하기
        </NextButton>
      </Footer>
    </>
  );
};

export default Auth;
