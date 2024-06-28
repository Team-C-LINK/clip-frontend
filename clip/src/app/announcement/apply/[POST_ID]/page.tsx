'use client';

import { useEffect, useState } from 'react';
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
import RequestApplyType from '@/app/type/RequestApplyType';
import { useParams } from 'next/navigation';
import postApplyResearch from '@/app/api/post-applyResearch';
import ModalComplete from './asset/components/ModalComplete/ModalComplete';
import { uploadS3Multiple } from '@/app/utils/uploadS3Multiple';
const Apply = () => {
  const params = useParams();
  const [modalState, setModalState] = useState<boolean>(false);
  const [modalCompleteState, setModalCompleteState] = useState<boolean>(false);
  const [applyInfo, setApplyInfo] = useState<RequestApplyType>({
    postId: parseInt(params.POST_ID as string),
    announcementReservationImages: [],
    scheduleId: 0,
    date: {
      date: '',
    },
  });
  const handleModalState = async () => {
    if (!modalState) setModalState(true);
    else {
      const imageList = await uploadS3Multiple(
        applyInfo?.announcementReservationImages as File[]
      );
      const requestData = applyInfo;
      requestData.announcementReservationImages = imageList;
      const res = await postApplyResearch(requestData);
      if (res?.status === 200) {
        setModalState(false);
        setModalCompleteState(true);
      }
    }
  };

  useEffect(() => {
    console.log(applyInfo.announcementReservationImages);
  }, [applyInfo]);

  return (
    <>
      <Header>
        <HeaderCancel
          route={'/announcement'}
          text="간편 지원하기"
        ></HeaderCancel>
        <Divider $size={'100%'}></Divider>
      </Header>
      <Spacer height="7.3rem"></Spacer>
      <Wrap>
        <CheckResearchInfo></CheckResearchInfo>
        <CheckMyInfo></CheckMyInfo>
        <SelectTime setApplyInfo={setApplyInfo}></SelectTime>
        <AdditionalInfo setApplyInfo={setApplyInfo}></AdditionalInfo>
      </Wrap>
      {modalCompleteState && <ModalComplete></ModalComplete>}
      {modalState && <ModalSubmit setModalState={setModalState}></ModalSubmit>}
      <Spacer height="9rem"></Spacer>
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
