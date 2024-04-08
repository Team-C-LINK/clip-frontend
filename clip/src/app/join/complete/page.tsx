'use client';

import Layout from '@/app/SharedComponent/Background';
import TopText from '../component/TopText/TopText';
import * as C from './component/C.style';
import NextButton from '../component/PrevNext/NextButton/NextButton';
import PrevButton from '../component/PrevNext/PrevButton/PrevButton';
import { useEffect, useState } from 'react';
import clippy from './assets/image/clippy6.svg';
import Image from 'next/image';

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
          <Image src={clippy.src} alt="clippy" width={328} height={189} />
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
