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
import { useRouter } from 'next/navigation';

const Address = () => {
  const { register, watch } = useForm();
  const router = useRouter();
  const { data, sidoList, setSidoList } = useGetSidoAddress();

  const next = () => {
    // 다음 버튼 눌렀을 때 동작
    // 거주지 로컬 스토리지에 저장하기
    router.push('/join/education');
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
                {...register('educationLevel')}
                backgroundcolor={
                  watch('educationLevel') ? '#ffffff' : '#d9d9d9'
                }
                textcolor={watch('educationLevel') ? '#252525' : '#8a8a8a'}
                src={arrow.src}
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
                {...register('ee')}
                backgroundcolor={watch('ee') ? '#ffffff' : '#d9d9d9'}
                textcolor={watch('ee') ? '#252525' : '#8a8a8a'}
                src={arrow.src}
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

          <PrevNext>
            <PrevButton $size={'45dvw'}>이전으로</PrevButton>
            <NextButton $size={'45dvw'} onClick={next}>
              다음으로
            </NextButton>
          </PrevNext>
        </C.Wrapper>
      </Layout>
    </>
  );
};

export default Address;
