'use client';

import * as C from './asset/components/C.style';
import Header from '@/app/SharedComponent/Header/Header';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import ResearchInfo from './asset/components/ResearchInfo/ReearchInfo';
import Footer from '@/app/SharedComponent/Footer/Footer';
import NextButton from '@/app/join/component/PrevNext/NextButton/NextButton';
import PrevBtn from '@/app/join/component/PrevNext/PrevButton/PrevButton';
import PrevNext from '@/app/join/component/PrevNext/PrevNext';
import Map from './asset/components/Map/Map';
import ResearcherInfo from './asset/components/ResearcherInfo/ResearcherInfo';
import Condition from './asset/components/Condition/Condition';
import HeaderRecruit from './asset/components/Header/HeaderRecruit';
import ModalShared from './asset/components/ModalShare/ModalShare';
import { useState } from 'react';

const test = [
  { index: '기한', content: '2024.04.25 까지' },
  { index: '지역', content: '서울 성북구 · 고려대학교 미래관 506호' },
  { index: '시간', content: '월~금 · 09시~17시' },
  { index: '지원 조건', content: '모든 성별 ·  20대 (1996년~2005년생)' },
];

const dummy = [
  `출생지 및 거주지가 수도권인 20대(1996~2005년생)의
  한국어 화자`,
  '주요 거주지(가장 오래 산 거주지)가 수도권이며 현재 수도권에 거주',
  '연구대상자는 평소 표준어를 사용',
];

const RecruitDetail = () => {
  const [modalState, setModalState] = useState(false);

  const setShareModalState = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <Spacer height="7rem"></Spacer>
      <Header>
        <HeaderRecruit setModalState={setShareModalState}></HeaderRecruit>
      </Header>
      {modalState && (
        <ModalShared setModalState={setShareModalState}></ModalShared>
      )}
      <C.Wrap>
        <Condition conditionList={test} conditionDetailList={dummy}></Condition>
        <ResearchInfo>{dummy2}</ResearchInfo>
        <Map address="인천 서구 경명대로 676"></Map>
        <ResearcherInfo></ResearcherInfo>
      </C.Wrap>
      <Spacer height="8rem" />
      <Footer>
        <PrevNext>
          <PrevBtn $size={'45dvw'}>문의하기</PrevBtn>
          <NextButton
            $size={'45dvw'}
            onClick={() => (window.location.href = '/recruit/apply')}
          >
            간편 지원하기
          </NextButton>
        </PrevNext>
      </Footer>
    </>
  );
};

export default RecruitDetail;

const dummy2 = `개요 : 2인 간의 대화 녹음 
녹음 과제 및 방법 - 연구대상자는 연구자가 매칭한 상대방과 자유롭게 대화를 진행하게 됩니다. 
- 1번의 대화당 30분 내외의 시간이 소요됩니다. 
- 실험은 최대 2번까지 참여 가능합니다.  

연구대상자 조건 (모두 충족해야 함) 
1) 연구대상자는 출생지 및 거주지가 수도권(서울/인천/경기)인 20대(1996~2005년생)의 한국어 화자이어야 합니다. 
- 단, 다른 지역에서 출생하였더라도 3세 이전에 수도권으로 이주한 경우에는 실험 참여가 가능합니다. 
2) 주요 거주지(가장 오래 산 거주지)가 수도권이며 현재 수도권에 거주 중이어야 합니다. 
3) 연구대상자는 평소 표준어를 사용하여야 합니다.  

사례비 - 1번의 대화당 문화상품권 10,000원의 사례비를 받으며, 2회 참여할 경우 20,000원의 사례비를 받습니다.

실험 장소: 고려대학교 민족문화관 A동 107호 음성언어정보연구실 내 녹음실 

신청 방법 - 실험에 대해 궁금한 사항이 있거나 참여하실 분들은 아래와 같은 양식으로 문자를 보내주세요. (담당자: 최동수 010-6438-1720)  

<양식> 이름: 홍길동 / 성별: 나이: __세(출생연도, 학번) 예) 21세(2003년생, 22학번) 출생지/현거주지: 수도권 이주 나이:__세 (출생지가 수도권이 아닌 경우) 수도권 거주 기간: __년 (출생지가 수도권이 아닌 경우) 학교/학과: 원하는 녹음 횟수: {1 또는 2} 회2`;
