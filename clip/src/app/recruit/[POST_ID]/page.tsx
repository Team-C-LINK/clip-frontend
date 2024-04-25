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
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import getTargetRecruitInfo from '@/app/api/get-targetRecruitInfo';
import PostType from '@/app/type/PostType';

const RecruitDetail = () => {
  const [modalState, setModalState] = useState(false);
  const setShareModalState = () => {
    setModalState(!modalState);
  };
  const param = useParams();
  const { data: info } = useQuery<PostType>({
    queryKey: ['post', param.POST_ID],
    queryFn: getTargetRecruitInfo,
  });

  return (
    <>
      <Spacer height="7rem"></Spacer>
      <Header>
        <HeaderRecruit
          isScraped={info?.isScraped}
          setModalState={setShareModalState}
        ></HeaderRecruit>
      </Header>
      {modalState && (
        <ModalShared setModalState={setShareModalState}></ModalShared>
      )}
      <C.Wrap>
        <Condition props={info}></Condition>
        <ResearchInfo>{info?.content}</ResearchInfo>
        <Map address="인천 서구 경명대로 676"></Map>
        <ResearcherInfo props={info}></ResearcherInfo>
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
