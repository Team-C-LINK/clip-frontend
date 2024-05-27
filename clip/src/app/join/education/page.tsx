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
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import Footer from '@/app/SharedComponent/Footer/Footer';
import {
  EDUCATION_LEVEL_LIST,
  EDUCATION_STATE,
} from '@/app/SharedComponent/DropdownOption/DropdownOption';

const Education = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [dropdown, setDropdown] = useState<{ [key: string]: string }>({
    educationName: '',
    educationStatus: '',
  });

  const setDropdownState = (e: any) => {
    const target = e.target.name;
    setDropdown((prev) => {
      return { ...prev, [target]: e.target.value };
    });
  };

  const next = () => {
    const signInfo = stringToJson(localStorage.getItem('signInfo')!);
    for (const key in dropdown) signInfo[key] = `${dropdown[key]}`;
    localStorage.setItem('signInfo', jsonToString(signInfo));
    router.push('/join/job');
  }; //

  return (
    <>
      <HeaderCancel route={'/login'} text=""></HeaderCancel>
      <ProgressBar page={4}></ProgressBar>
      <C.view_wrap>
        <TopText
          top={'정보 입력'}
          bottom={'나에게 맞는 연구정보만 모아볼 수 있어요'}
        ></TopText>
        <C.Dropdown_wrap>
          <C.Dropdown_title>최종학력을 선택해주세요</C.Dropdown_title>
          <C.Dropdown_list_wrap>
            <C.Dropdown
              {...register('educationName')}
              backgroundcolor={watch('educationName') ? '#ffffff' : '#d9d9d9'}
              onClick={setDropdownState}
              textcolor={dropdown.educationName ? '#252525' : '#8a8a8a'}
              src={arrow.src}
            >
              {EDUCATION_LEVEL_LIST?.map((val: string, idx) => {
                return (
                  <option key={idx} value={val}>
                    {val}
                  </option>
                );
              })}
            </C.Dropdown>
            <C.Dropdown
              {...register('educationStatus')}
              backgroundcolor={watch('educationStatus') ? '#ffffff' : '#d9d9d9'}
              textcolor={dropdown.educationStatus ? '#252525' : '#8a8a8a'}
              src={arrow.src}
              onClick={setDropdownState}
            >
              {EDUCATION_STATE?.map((val: string, idx) => {
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
          <PrevButton
            onClick={() => {
              router.back();
            }}
            $size={'45dvw'}
          >
            이전으로
          </PrevButton>
          {dropdown.educationName && dropdown.educationStatus ? (
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
