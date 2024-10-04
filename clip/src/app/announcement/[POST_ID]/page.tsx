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
import { Suspense, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import getTargetRecruitInfo from '@/app/api/get-targetRecruitInfo';
import PostType from '@/app/type/PostType';
import NextButtonGray from '@/app/SharedComponent/NextButton/NextButtonGray';
import api from '@/app/api/api';
import Content from './asset/components/Content/Content';

interface RecruitDetailProps {
  params: {
    POST_ID: string;
  };
}

const RecruitDetail: React.FC<RecruitDetailProps> = async ({ params }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['post', params.POST_ID],
    queryFn: getTargetRecruitInfo,
  });

  // const handleApplyBtn = (recommender_code: string | null) => {
  //   if (recommender_code)
  //     router.push(
  //       `/announcement/apply/${param.POST_ID}?recommender_code=${recommender_code}`
  //     );
  //   else router.push(`/announcement/apply/${param.POST_ID}`);
  // };

  return (
    <>
      <Spacer height="7rem"></Spacer>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header>
          <HeaderRecruit></HeaderRecruit>
        </Header>
        <Content></Content>
      </HydrationBoundary>
    </>
  );
};

export default RecruitDetail;
