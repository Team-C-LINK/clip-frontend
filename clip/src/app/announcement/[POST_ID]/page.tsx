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
import { useParams, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import getTargetRecruitInfo from '@/app/api/get-targetRecruitInfo';
import PostType from '@/app/type/PostType';
import NextButtonGray from '@/app/SharedComponent/NextButton/NextButtonGray';

const RecruitDetail = () => {
  const [modalState, setModalState] = useState(false);
  const setShareModalState = () => {
    setModalState(!modalState);
  };
  const param = useParams();
  const router = useRouter();
  const queryParam = useSearchParams();
  const { data: info } = useQuery<PostType>({
    queryKey: ['post', param.POST_ID],
    queryFn: getTargetRecruitInfo,
  });

  const handleApplyBtn = (recommender_code: string | null) => {
    if (recommender_code)
      router.push(
        `/announcement/apply/${param.POST_ID}?recommender_code=${recommender_code}`
      );
    else router.push(`/announcement/apply/${param.POST_ID}`);
  };

  return (
    <>
      <Spacer height="7rem"></Spacer>
      <Header>
        <HeaderRecruit
          title={info?.title}
          isScraped={info?.isScraped}
          setModalState={setShareModalState}
        ></HeaderRecruit>
      </Header>
      {modalState && (
        <ModalShared setModalState={setShareModalState}></ModalShared>
      )}
      <C.Wrap>
        <Condition props={info}></Condition>
        <ResearchInfo
          imageUrl={info?.image}
          content={info?.content}
        ></ResearchInfo>
        {info?.category === '연구/인터뷰' && (
          <Map address={info?.researchLocation}></Map>
        )}
        <ResearcherInfo info={info}></ResearcherInfo>
      </C.Wrap>
      <Spacer height="8rem" />
      <Footer>
        <PrevNext>
          {info?.isRecruiting ? (
            <NextButton
              $size={'90dvw'}
              // onClick={() => handleApplyBtn(queryParam.get('recommender_code'))}
              onClick={() =>
                window.open(`https://${info?.registerLink as string}`)
              }
            >
              {info?.category === '연구/인터뷰'
                ? '간편 지원하기'
                : '설문 참여하기'}
            </NextButton>
          ) : (
            <NextButtonGray $size={'90dvw'}>마감된 공고입니다.</NextButtonGray>
          )}
        </PrevNext>
      </Footer>
    </>
  );
};

export default RecruitDetail;
