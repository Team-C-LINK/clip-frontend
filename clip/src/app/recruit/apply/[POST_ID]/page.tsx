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
        <CheckResearchInfo></CheckResearchInfo>
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

export default Apply;
