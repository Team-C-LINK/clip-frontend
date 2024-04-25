import styled from 'styled-components';
import Title from '../Title/Title';
import Divider from '@/app/SharedComponent/Divider/Divider';
import Condition_wrap from './components/Condition_wrap/Condition_wrap';
import ConditionDetail from './components/ConditionDetail/ConditionDetail';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';

type ConditionType = {
  conditionList: ConditionInnerType[];
  conditionDetailList: string[];
};

type ConditionInnerType = {
  index: string;
  content: string;
};

const CheckResearchInfo = (props: ConditionType) => {
  return (
    <>
      <Wrap>
        <TilteWithIndex index="1" text="연구 정보 확인"></TilteWithIndex>
        <Title_Divider_wrap>
          <Title>배고픔을 느끼는지 알아보는 실험 참여자를 모집합니다.</Title>
          <Divider $size={'91.1%'}></Divider>
        </Title_Divider_wrap>
        <Condition_wrap list={props?.conditionList}></Condition_wrap>
        <ConditionDetail list={props?.conditionDetailList}></ConditionDetail>
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
