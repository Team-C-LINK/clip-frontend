'use client';

import { useState } from 'react';
import Divider from '@/app/SharedComponent/Divider/Divider';
import Header from '@/app/SharedComponent/Header/Header';
import HeaderCancel from '@/app/SharedComponent/Header/HeaderCancel/HeaderCancel';
import CheckResearchInfo from './asset/components/CheckResearchInfo/CheckResearchInfo';
import CheckMyInfo from './asset/components/CheckMyInfo/CheckMyInfo';
import styled from 'styled-components';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import { Footer } from '@/app/SharedComponent/Footer/Footer.style';
import NextButton from '@/app/join/component/PrevNext/NextButton/NextButton';
import SelectTime from './asset/components/SelectTime/SelectTime';
import AdditionalInfo from './asset/components/AdditionalInfo/AdditionalInfo';
import ModalSubmit from './asset/components/ModalSubmit/ModalSubmit';

const Apply = () => {
  const [modalState, setModalState] = useState<boolean>(false);

  const handleModalState = () => {
    if (!modalState) setModalState(true);
    else {
      // 완료 api 비즈니스 로직
    }
  };

  return (
    <>
      <Header>
        <HeaderCancel route={'/recruit'} text="간편 지원하기"></HeaderCancel>
        <Divider $size={'100%'}></Divider>
      </Header>
      <Spacer height="7.3rem"></Spacer>
      <Wrap>
        <CheckResearchInfo
          conditionList={test}
          conditionDetailList={dummy}
        ></CheckResearchInfo>
        <CheckMyInfo></CheckMyInfo>
        <SelectTime></SelectTime>
        <AdditionalInfo></AdditionalInfo>
      </Wrap>
      {modalState && <ModalSubmit setModalState={setModalState}></ModalSubmit>}
      <Spacer height="8rem"></Spacer>
      <Footer>
        <NextButton $size="91.1%" onClick={handleModalState}>
          완료하기
        </NextButton>
      </Footer>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 91.1%;
`;

const dummy = [
  `출생지 및 거주지가 수도권인 20대(1996~2005년생)의
  한국어 화자`,
  '주요 거주지(가장 오래 산 거주지)가 수도권이며 현재 수도권에 거주',
  '연구대상자는 평소 표준어를 사용',
];

const test = [
  { index: '기한', content: '2024.04.25 까지' },
  { index: '지역', content: '서울 성북구 · 고려대학교 미래관 506호' },
  { index: '시간', content: '월~금 · 09시~17시' },
  { index: '지원 조건', content: '모든 성별 ·  20대 (1996년~2005년생)' },
];

export default Apply;
