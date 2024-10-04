'use client';

import * as S from './Content.style';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import getTargetRecruitInfo from '@/app/api/get-targetRecruitInfo';
import PostType from '@/app/type/PostType';
import Condition from '../Condition/Condition';
import Map from '../Map/Map';
import ResearchInfo from '../ResearchInfo/ReearchInfo';
import ResearcherInfo from '../ResearcherInfo/ResearcherInfo';
import Footer from '@/app/SharedComponent/Footer/Footer';
import PrevNext from '@/app/join/component/PrevNext/PrevNext';
import NextButtonGray from '@/app/SharedComponent/NextButton/NextButtonGray';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import NextButton from '@/app/join/component/PrevNext/NextButton/NextButton';

const Content = () => {
  const param = useParams();
  const { data: info, isLoading } = useQuery<PostType>({
    queryKey: ['post', param.POST_ID],
    queryFn: getTargetRecruitInfo,
  });

  return (
    <>
      <S.Wrap>
        <Condition info={info}></Condition>
        <ResearchInfo info={info}></ResearchInfo>
        <Map info={info}></Map>
        <ResearcherInfo info={info}></ResearcherInfo>
      </S.Wrap>
      <Spacer height="8rem"></Spacer>
      <Footer>
        <PrevNext>
          {info?.isRecruiting && info?.remainingDay ? (
            <NextButton
              $size={'90dvw'}
              // onClick={() => handleApplyBtn(queryParam.get('recommender_code'))}
              onClick={() => window.open(`${info?.registerLink as string}`)}
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

export default Content;
