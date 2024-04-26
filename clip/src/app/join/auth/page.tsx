'use client';
import TopText from '../component/TopText/TopText';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import * as C from './component/C.style';
import PrevNext from '../component/PrevNext/PrevNext';
import NextButton from '../component/PrevNext/NextButton/NextButton';
import PrevButton from '../component/PrevNext/PrevButton/PrevButton';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useRef, use } from 'react';
import check from './assets/image/check.svg';
import { useRouter } from 'next/navigation';
import phoneNumberFormatter from './utils/phoneNumberFormatter';
import postSignRequestAuth from '@/app/api/post-signRequestAuth';
import postSignCheckAuth from '@/app/api/post-signCheckAuth';
import NextButtonDisabled from '../component/PrevNext/NextButtonDisabled/NextButton';
import jsonToString from '../utils/jsonToString';
import stringToJson from '../utils/stringToJson';
import Image from 'next/image';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import Footer from '@/app/SharedComponent/Footer/Footer';

const PHONE_REGEX = /^01([0|1|6|7|8|9]?)-([0-9]{3,4})-([0-9]{4})$/i;
const AUTH_REGEX = /^\d{6}$/i;

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

    if (await postSignRequestAuth(phoneNumber)) {
      startTimer();
      setAuthCodeState(1);
    }
  };

  const requestCheckAuth = async () => {
    const phone = watch('phoneNumber').replace(/-/g, '');

    const requestData = {
      phoneNumber: phone,
      verificationNumber: watch('verificationNumber'),
    };

    const certification = await postSignCheckAuth(requestData);

    if (certification) {
      const signInfo = stringToJson(localStorage.getItem('signInfo')!);
      signInfo['certification'] = certification;
      signInfo['number'] = phone;
      localStorage.setItem('signInfo', jsonToString(signInfo));
      setAuthCodeState(2);
      setIsValid(true);
    }
  };

  const handlePhoneNumberChange = (e: any) => {
    const formattedPhoneNumber = phoneNumberFormatter(e.target.value);
    setValue('phoneNumber', formattedPhoneNumber);
  };

  const next = () => {
    router.push('/join/address');
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
      <HeaderCancel route={'/mypage'} text=""></HeaderCancel>
      <ProgressBar page={2}></ProgressBar>
      <C.view_wrap>
        <TopText
          top={'본인인증'}
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
            {!watch('phoneNumber') ||
            errors.phoneNumber?.message?.toString() ? (
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
            {!watch('verificationNumber') ||
            errors.verficationNumber?.message?.toString() ? (
              <C.getAuthDisable>인증하기</C.getAuthDisable>
            ) : (
              <C.getAuth onClick={requestCheckAuth}>인증하기</C.getAuth>
            )}
          </C.phoneNumber_wrap>
          {authCodeComponent[authCodeState]}
        </C.auth_wrap>
      </C.view_wrap>
      <Footer>
        <PrevNext>
          <PrevButton
            onClick={() => {
              router.back();
            }}
            $size={'45dvw'}
          >
            이전으로
          </PrevButton>
          {isValid ? (
            <NextButton onClick={next} $size={'45dvw'}>
              다음으로
            </NextButton>
          ) : (
            <NextButtonDisabled>다음으로</NextButtonDisabled>
          )}
        </PrevNext>
      </Footer>
    </>
  );
};

export default Auth;
