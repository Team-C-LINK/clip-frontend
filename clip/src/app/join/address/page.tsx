'use client';

import Layout from '@/app/SharedComponent/Background';
import TopText from '../component/TopText/TopText';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import * as C from './component/C.style';
import arrow from './assets/image/arrow.svg';
import { useForm } from 'react-hook-form';
import useGetSidoAddress from './hooks/useGetSido';
import NextButton from '../component/PrevNext/NextButton/NextButton';
import PrevButton from '../component/PrevNext/PrevButton/PrevButton';
import PrevNext from '../component/PrevNext/PrevNext';

const Address = () => {
  const { register, watch } = useForm();

  const { sidoList } = useGetSidoAddress();

  const next = () => {
    // 다음 버튼 눌렀을 때 동작
    // 거주지 로컬 스토리지에 저장하기
  }; //

  return (
    <>
      <Layout>
        <C.Wrapper>
          <ProgressBar page={3}></ProgressBar>
          <TopText
            top={'주소 입력'}
            bottom={'나와 가까운 연구참여 정보를 받아 볼 수 있어요'}
          ></TopText>
          <C.Dropdown_wrap>
            <C.Dropdown_title>거주지를 선택해주세요</C.Dropdown_title>
            <C.Dropdown_list_wrap>
              <C.Dropdown
                {...register('sido')}
                backgroundColor={watch('sido') ? '#ffffff' : '#d9d9d9'}
                textColor={watch('sido') ? '#252525' : '#8a8a8a'}
                src={arrow.src}
              >
                {sidoList?.map((val) => {
                  return <option value={val.name}>{val.name}</option>;
                })}
              </C.Dropdown>
              <C.Dropdown
                {...register('gu')}
                backgroundColor={watch('gu') ? '#ffffff' : '#d9d9d9'}
                textColor={watch('gu') ? '#252525' : '#8a8a8a'}
                src={arrow.src}
              >
                {sidoList?.map((val) => {
                  return <option value={val.name}>{val.name}</option>;
                })}
              </C.Dropdown>
            </C.Dropdown_list_wrap>
          </C.Dropdown_wrap>

          <PrevNext>
            <PrevButton>이전으로</PrevButton>
            <NextButton onClick={next}>다음으로</NextButton>
          </PrevNext>
        </C.Wrapper>
      </Layout>
    </>
  );
};

export default Address;
