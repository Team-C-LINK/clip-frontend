import styled from 'styled-components';
import StatusBar from '../StatusBar/StatusBar';
import Title from '../Title/Title';
import Divider from '@/app/SharedComponent/Divider/Divider';
import Condition_wrap from './components/Condition_wrap/Condition_wrap';
import ConditionDetail from './components/ConditionDetail/ConditionDetail';
import PostType from '@/app/type/PostType';

const Condition = ({ props }: { props: PostType | undefined }) => {
  const conditionList = [
    { index: '기한', content: props?.endDate },
    { index: '지역', content: props?.researchLocation },
    { index: '시간', content: props?.researchAvailableTime },
    { index: '지원 조건', content: '모든 성별 ·  20대 (1996년~2005년생)' },
  ];

  return (
    <>
      <Wrap>
        <StatusBar
          recruitStatus={props?.isRecruiting}
          category={props?.category}
        ></StatusBar>
        <Title_Divider_wrap>
          <Title>{props?.title}</Title>
          <Divider $size={'100%'}></Divider>
        </Title_Divider_wrap>
        <Condition_wrap list={conditionList}></Condition_wrap>
        <ConditionDetail list={props?.applicationConditions}></ConditionDetail>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Title_Divider_wrap = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default Condition;
