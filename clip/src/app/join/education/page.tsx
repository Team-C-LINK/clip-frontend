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

const EDUCATION_LEVEL_LIST = [
  '중학교',
  '고등학교',
  '대학교(2년제)',
  '대학교(4년제)',
  '석사, 박사',
];
const EDUCATION_STATE = ['재학', '졸업', '자퇴'];

const Education = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [dropdown, setDropdown] = useState({
    educationLevel: '',
    educationState: '',
  });

  const next = () => {
    router.push('/join/job');
  };

  const setDropdownState = (e: any) => {
    const target = e.target.name;
    setDropdown((prev) => {
      return { ...prev, [target]: e.target.value };
    });
  };

  return (
    <>
      <Layout>
        <C.Wrapper>
          <ProgressBar page={4}></ProgressBar>
          <TopText
            top={'정보 입력'}
            bottom={'나에게 맞는 연구정보만 모아볼 수 있어요'}
          ></TopText>
          <C.Dropdown_wrap>
            {errors.educationLevel?.message?.toString()}
            <C.Dropdown_title>최종학력을 선택해주세요</C.Dropdown_title>
            <C.Dropdown_list_wrap>
              <C.Dropdown
                {...register('educationLevel')}
                backgroundcolor={
                  watch('educationLevel') ? '#ffffff' : '#d9d9d9'
                }
                onClick={setDropdownState}
                textcolor={dropdown.educationLevel ? '#252525' : '#8a8a8a'}
                src={arrow.src}
              >
                {EDUCATION_LEVEL_LIST?.map((val: string) => {
                  return <option value={val}>{val}</option>;
                })}
              </C.Dropdown>
              <C.Dropdown
                {...register('educationState')}
                backgroundcolor={
                  watch('educationState') ? '#ffffff' : '#d9d9d9'
                }
                textcolor={dropdown.educationState ? '#252525' : '#8a8a8a'}
                src={arrow.src}
                onClick={setDropdownState}
              >
                {EDUCATION_STATE?.map((val: string) => {
                  return <option value={val}>{val}</option>;
                })}
              </C.Dropdown>
            </C.Dropdown_list_wrap>
          </C.Dropdown_wrap>

          <PrevNext>
            <PrevButton $size={'45dvw'}>이전으로</PrevButton>
            {dropdown.educationLevel && dropdown.educationState ? (
              <NextButton $size={'45dvw'} onClick={next}>
                다음으로
              </NextButton>
            ) : (
              <NextButtonDisabled>다음으로</NextButtonDisabled>
            )}
          </PrevNext>
        </C.Wrapper>
      </Layout>
    </>
  );
};

export default Education;
