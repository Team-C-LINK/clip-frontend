import styled from 'styled-components';
import Title from '../Title/Title';
import Divider from '@/app/SharedComponent/Divider/Divider';
import Condition_wrap from './components/Condition_wrap/Condition_wrap';
import ConditionDetail from './components/ConditionDetail/ConditionDetail';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import getTargetRecruitInfo from '@/app/api/get-targetRecruitInfo';
import PostType from '@/app/type/PostType';

type ConditionInnerType = {
  index: string;
  content: string;
};

const CheckResearchInfo = () => {
  const param = useParams();

  const { data: info } = useQuery<PostType>({
    queryKey: ['post', param.POST_ID],
    queryFn: getTargetRecruitInfo,
  });

  const conditionList = [
    { index: '기한', content: info?.endDate! },
    { index: '지역', content: info?.researchLocation! },
    { index: '시간', content: info?.researchAvailableTime! },
    { index: '지원 조건', content: '모든 성별 ·  20대 (1996년~2005년생)' },
  ];

  return (
    <>
      <Wrap>
        <TilteWithIndex index="1" text="연구 정보 확인"></TilteWithIndex>
        <Title_Divider_wrap>
          <Title>{info?.title}</Title>
          <Divider $size={'100%'}></Divider>
        </Title_Divider_wrap>
        <Condition_wrap list={conditionList}></Condition_wrap>
        <ConditionDetail list={info?.applicationConditions!}></ConditionDetail>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const Title_Divider_wrap = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default CheckResearchInfo;
