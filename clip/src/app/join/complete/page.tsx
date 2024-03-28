'use client';

import Layout from '@/app/SharedComponent/Background';
import TopText from '../component/TopText/TopText';

import * as C from './component/C.style';
import NextButton from '../component/PrevNext/NextButton/NextButton';
import NextButtonDisabled from '../component/PrevNext/NextButtonDisabled/NextButton';
import PrevButton from '../component/PrevNext/PrevButton/PrevButton';
import PrevNext from '../component/PrevNext/PrevNext';
import { useEffect, useState } from 'react';
import clippy from './assets/image/clippy6.svg';

const Complete = () => {
  const [dropdown, setDropdown] = useState({
    job: '',
  });

  const next = () => {};

  return (
    <>
      <Layout>
        <C.Wrapper>
          <C.Title_wrap>
            <TopText
              top={'회원가입 완료'}
              bottom={'지금 바로 클립의 모든 서비스를 사용해보세요!'}
            ></TopText>
          </C.Title_wrap>
          <img src={clippy.src}></img>
          <C.Middle_text>회원가입 축하 300P를 지급해드렸어요!</C.Middle_text>
          <C.Btn_wrap>
            <NextButton $size={'91.1dvw'} onClick={next}>
              로그인하기
            </NextButton>
            <PrevButton $size={'91.1dvw'}>클립 홈으로 돌아가기</PrevButton>
          </C.Btn_wrap>
        </C.Wrapper>
      </Layout>
    </>
  );
};

export default Complete;
