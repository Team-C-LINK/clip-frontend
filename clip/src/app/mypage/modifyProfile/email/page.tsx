'use client';
import TopText from '@/app/join/component/TopText/TopText';
import * as C from './assets/component/C.style';
import NextButton from '@/app/join/component/PrevNext/NextButton/NextButton';
import NextButtonDisabled from '@/app/join/component/PrevNext/NextButtonDisabled/NextButton';
import PrevNext from '@/app/join/component/PrevNext/PrevNext';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';
import check from './assets/image/check.svg';
import { useRouter } from 'next/navigation';
import postModifyGetAuthEmail from '@/app/api/post-modifyGetAuthEmail';
import patchModifyCheckAuthEmail from '@/app/api/post-modifyCheckAuthEmail';
import jsonToString from '@/app/join/utils/jsonToString';
import stringToJson from '@/app/join/utils/stringToJson';
import Image from 'next/image';
import Header from '@/app/SharedComponent/Header/Header';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import { Footer } from '@/app/SharedComponent/Footer/Footer.style';

const PHONE_REGEX = /^01([0|1|6|7|8|9]?)-([0-9]{3,4})-([0-9]{4})$/i;
const AUTH_REGEX = /^\d{4}$/i;

const Email = () => {
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

  const requestAuthCode = async () => {
    const email = watch('email');
    const request = {
      receiverEmail: email,
    };

    if (await postModifyGetAuthEmail(request)) {
      setAuthCodeState(1);
    }
  };

  const requestCheckAuth = async () => {
    const email = watch('email');

    const request = {
      receiverEmail: email,
      verificationNumber: watch('verificationNumber'),
    };

    const certification = await patchModifyCheckAuthEmail(request);

    if (certification?.status === 204)
      window.location.href = '/mypage/modifyProfile';
    else alert('인증이 올바르지 않습니다. 다시 시도해주세요.');
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
      인증번호가 발송되었습니다. 이메일을 확인해 주세요.
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
        top={'이메일 변경'}
        bottom={'이메일 주소를 입력하고 인증을 완료해주세요'}
      ></TopText>
      <C.auth_wrap>
        <C.phoneNumber_wrap>
          <C.phoneNumber
            placeholder="이메일 주소를 입력해주세요"
            {...register('email', {})}
            id="email"
          ></C.phoneNumber>
          <C.getAuth onClick={requestAuthCode}>인증번호 받기</C.getAuth>
        </C.phoneNumber_wrap>
        <C.phoneNumber_wrap>
          <C.certification
            placeholder="인증번호를 입력해주세요"
            {...register('verificationNumber', {
              pattern: AUTH_REGEX,
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

export default Email;
