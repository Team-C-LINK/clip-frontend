'use client';

import TopText from '../component/TopText/TopText';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import * as C from './component/C.style';
import arrow from './assets/image/arrow.svg';
import { useForm } from 'react-hook-form';
import NextButton from '../component/PrevNext/NextButton/NextButton';
import NextButtonDisabled from '../component/PrevNext/NextButtonDisabled/NextButton';
import PrevButton from '../component/PrevNext/PrevButton/PrevButton';
import PrevNext from '../component/PrevNext/PrevNext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import stringToJson from '../utils/stringToJson';
import jsonToString from '../utils/jsonToString';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import Footer from '@/app/SharedComponent/Footer/Footer';
import { sidoList, siguList } from './hooks/sidoList';

const Address = () => {
  const { register, watch } = useForm();
  const router = useRouter();

  const [dropdown, setDropdown] = useState<{ [key: string]: string }>({
    city: '',
    district: '',
  });

  const setDropdownState = (e: any) => {
    const target = e.target.name;
    setDropdown((prev) => {
      return { ...prev, [target]: e.target.value };
    });
  };

  useEffect(() => {
    if (dropdown.sido) {
      setDropdown((prev) => {
        return { ...prev, gu: siguList[dropdown.sido][0] };
      });
    }
  }, [dropdown.sido]);

  const next = () => {
    const signInfo = stringToJson(localStorage.getItem('signInfo')!);
    for (const key in dropdown) signInfo[key] = `${dropdown[key]}`;
    localStorage.setItem('signInfo', jsonToString(signInfo));
    router.push('/join/education');
  };

  return (
    <>
      <HeaderCancel route={'/login'} text=""></HeaderCancel>
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
              {...register('city')}
              onClick={setDropdownState}
              onChange={setDropdownState}
              $background={dropdown.city ? '#ffffff' : '#F9FAFC'}
              $textcolor={dropdown.city ? '#252525' : '#8a8a8a'}
              $src={arrow.src}
            >
              {sidoList?.map((val, idx) => {
                return (
                  <option key={idx} value={val}>
                    {val}
                  </option>
                );
              })}
            </C.Dropdown>
            <C.Dropdown
              {...register('district')}
              onChange={setDropdownState}
              $background={dropdown.district ? '#ffffff' : '#F9FAFC'}
              $textcolor={dropdown.district ? '#252525' : '#8a8a8a'}
              $src={arrow.src}
              value={dropdown.district}
            >
              {siguList[dropdown.city]?.map((val, idx) => {
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
          {dropdown.city && dropdown.district ? (
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
