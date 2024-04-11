'use client';

import Layout from '@/app/SharedComponent/Background';
import TopText from '../component/TopText/TopText';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import * as C from './component/C.style';
import arrow from './assets/image/arrow.svg';
import { useForm } from 'react-hook-form';
import useGetSidoAddress from './hooks/useGetSido';
import NextButton from '../component/PrevNext/NextButton/NextButton';
import NextButtonDisabled from '../component/PrevNext/NextButtonDisabled/NextButton';
import PrevButton from '../component/PrevNext/PrevButton/PrevButton';
import PrevNext from '../component/PrevNext/PrevNext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import stringToJson from '../utils/stringToJson';
import jsonToString from '../utils/jsonToString';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import Footer from '@/app/SharedComponent/Footer/Footer';

const Address = () => {
  const { register, watch } = useForm();
  const router = useRouter();
  const { data, sidoList, setSidoList } = useGetSidoAddress();

  const [dropdown, setDropdown] = useState<{ [key: string]: string }>({
    sido: '',
    gu: '',
  });

  const setDropdownState = (e: any) => {
    const target = e.target.name;
    setDropdown((prev) => {
      return { ...prev, [target]: e.target.value };
    });
  };

  const next = () => {
    // 다음 버튼 눌렀을 때 동작
    // 거주지 로컬 스토리지에 저장하기
    const signInfo = stringToJson(localStorage.getItem('signInfo')!);
    let address = '';
    for (const key in dropdown) address += `${dropdown[key]} `;
    signInfo['address'] = address;
    localStorage.setItem('signInfo', jsonToString(signInfo));
    router.push('/join/education');
  }; //

  return (
    <>
      <HeaderCancel></HeaderCancel>
      <ProgressBar page={3}></ProgressBar>
      <C.view_wrap>
        <TopText
          top={'주소 입력'}
          bottom={'나와 가까운 연구참여 정보를 받아 볼 수 있어요'}
        ></TopText>
        <C.Dropdown_wrap>
          <C.Dropdown_title>거주지를 선택해주세요</C.Dropdown_title>
          <C.Dropdown_list_wrap>
            <C.Dropdown
              {...register('sido')}
              onChange={setDropdownState}
              $background={dropdown.sido ? '#ffffff' : '#F9FAFC'}
              $textcolor={dropdown.sido ? '#252525' : '#8a8a8a'}
              $src={arrow.src}
            >
              {sidoList?.map((val, idx) => {
                return (
                  <option key={idx} value={val.name}>
                    {val.name}
                  </option>
                );
              })}
            </C.Dropdown>
            <C.Dropdown
              {...register('gu')}
              onChange={setDropdownState}
              $background={dropdown.gu ? '#ffffff' : '#F9FAFC'}
              $textcolor={dropdown.gu ? '#252525' : '#8a8a8a'}
              $src={arrow.src}
            >
              {sidoList?.map((val, idx) => {
                return (
                  <option key={idx} value={val.name}>
                    {val.name}
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
          {dropdown.sido && dropdown.gu ? (
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

export default Address;
