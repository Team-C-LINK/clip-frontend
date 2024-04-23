import styled from 'styled-components';
import StatusBar from '../StatusBar/StatusBar';
import Title from '../Title/Title';
import Divider from '@/app/SharedComponent/Divider/Divider';
import Condition_wrap from './components/Condition_wrap/Condition_wrap';
import ConditionDetail from './components/ConditionDetail/ConditionDetail';

type ConditionType = {
  conditionList: ConditionInnerType[];
  conditionDetailList: string[];
};

type ConditionInnerType = {
  index: string;
  content: string;
};

const Condition = (props: ConditionType) => {
  return (
    <>
      <Wrap>
        <StatusBar recruitStatus={true} category="📊설문조사"></StatusBar>
        <Title_Divider_wrap>
          <Title>배고픔을 느끼는지 알아보는 실험 참여자를 모집합니다.</Title>
          <Divider></Divider>
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
