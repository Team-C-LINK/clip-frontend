'use client';
import TopText from '../component/TopText/TopText';
import ProgressBar from '../component/ProgressBar/ProgressBar';
import Layout from '@/app/SharedComponent/Background';
import * as C from './component/C.style';
import PrevNext from '../component/PrevNext/PrevNext';

const Auth = () => {
  return (
    <>
      <Layout>
        <C.Wrapper>
          <ProgressBar page={2}></ProgressBar>
          <TopText
            top={'본인인증'}
            bottom={'본인 확인을 위해 휴대전화 번호를 입력해주세요'}
          ></TopText>
          <PrevNext></PrevNext>
        </C.Wrapper>
      </Layout>
    </>
  );
};

export default Auth;
