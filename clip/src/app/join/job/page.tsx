'use client';

import Layout from '@/app/SharedComponent/Background';
import TopText from '../component/TopText/TopText';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import * as C from './component/C.style';
import arrow from './assets/image/arrow.svg';
import { useForm } from 'react-hook-form';
import NextButton from '../component/PrevNext/NextButton/NextButton';
import NextButtonDisabled from '../component/PrevNext/NextButtonDisabled/NextButton';
import PrevButton from '../component/PrevNext/PrevButton/PrevButton';
import PrevNext from '../component/PrevNext/PrevNext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jsonToString from '../utils/jsonToString';
import stringToJson from '../utils/stringToJson';
import api from '@/app/api/api';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import Footer from '@/app/SharedComponent/Footer/Footer';

const JOB_LIST = ['직장인', '자영업', '학생', '전업 주부', '무직', '은퇴'];

const Education = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [dropdown, setDropdown] = useState<{ [key: string]: string }>({
    job: '',
  });

  const router = useRouter();

  const next = async () => {
    const signInfo = stringToJson(localStorage.getItem('signInfo')!);
    for (const key in dropdown) signInfo[key] = dropdown[key];
    localStorage.setItem('signInfo', jsonToString(signInfo));

    try {
      const res = await api
        .post('/sign-up', signInfo)
        .then((response) => response.data);
      if (res.acceessToken) router.push('/join/complete');
    } catch (e) {
      // alert('유효하지 않은 회원가입 요청입니다. 처음부터 다시 진행해주세요');
      // window.location.href = '/login';
      console.log(e);
    }
  }; //

  const setDropdownState = (e: any) => {
    const target = e.target.name;
    setDropdown((prev) => {
      return { ...prev, [target]: e.target.value };
    });
  };

  return (
    <>
      <HeaderCancel route={'/login'}></HeaderCancel>
      <ProgressBar page={5}></ProgressBar>
      <C.view_wrap>
        <TopText
          top={'정보 입력'}
          bottom={'나에게 맞는 연구정보만 모아볼 수 있어요'}
        ></TopText>
        <C.Dropdown_wrap>
          {errors.educationLevel?.message?.toString()}
          <C.Dropdown_title>근무 형태를 선택해주세요</C.Dropdown_title>
          <C.Dropdown_list_wrap>
            <C.Dropdown
              {...register('job')}
              onChange={setDropdownState}
              $background={dropdown.job ? '#ffffff' : '#F9FAFC'}
              $textcolor={dropdown.job ? '#252525' : '#8a8a8a'}
              src={arrow.src}
            >
              {JOB_LIST?.map((val: string, idx) => {
                return (
                  <option key={idx} value={val}>
                    {val}
                  </option>
                );
              })}
            </C.Dropdown>
          </C.Dropdown_list_wrap>
        </C.Dropdown_wrap>
      </C.view_wrap>
      <Footer>
        <PrevNext>
          <PrevButton $size={'45dvw'}>이전으로</PrevButton>
          {dropdown.job ? (
            <NextButton $size={'45dvw'} onClick={next}>
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

export default Education;
