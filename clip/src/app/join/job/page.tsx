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

const JOB_LIST = ['직장인', '자영업', '학생', '무직', '전업 주부', '은퇴'];

const Education = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [dropdown, setDropdown] = useState({
    job: '',
  });

  const router = useRouter();

  const next = () => {
    router.push('/join/complete');
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
          <ProgressBar page={5}></ProgressBar>
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
                $background={dropdown.job ? '#ffffff' : '#F9FAFC'}
                onClick={setDropdownState}
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
        </C.Wrapper>
      </Layout>
    </>
  );
};

export default Education;
