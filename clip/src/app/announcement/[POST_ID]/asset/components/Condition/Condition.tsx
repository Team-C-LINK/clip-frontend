import styled from 'styled-components';
import StatusBar from '../StatusBar/StatusBar';
import Title from '../Title/Title';
import Divider from '@/app/SharedComponent/Divider/Divider';
import Condition_wrap from './components/Condition_wrap/Condition_wrap';
import ConditionDetail from './components/ConditionDetail/ConditionDetail';
import PostType from '@/app/type/PostType';

const Condition = ({ info }: { info?: PostType }) => {
  const addressFilter = (info?: PostType) => {
    if (info?.category === '연구/인터뷰') {
      const [city, district, detail] = info?.researchLocation.split(' ');
      if (detail === '줌') return '온라인';
      else return info?.researchLocation;
    }

    if (info?.category === '설문조사') return '온라인';
  };

  const conditionList = [
    {
      index: '기한',
      content: (
        <span>
          {`${info?.endDate} 까지 · `}
          <Purple>{`D-${info?.remainingDay}`}</Purple>
        </span>
      ),
    },
    {
      index: '지역',
      content: addressFilter(info),
    },
    // { index: '시간', content: props?.researchAvailableTime },
    { index: '지원 조건', content: '' },
  ];

  return (
    <>
      <Wrap>
        <StatusBar
          recruitStatus={info?.isRecruiting && info?.remainingDay !== 0}
          category={info?.category}
        ></StatusBar>
        <Title_Divider_wrap>
          <Title>{info?.title}</Title>
          <Divider $size={'100%'}></Divider>
        </Title_Divider_wrap>
        <Condition_wrap list={conditionList}></Condition_wrap>
        <ConditionDetail list={info?.applicationConditions}></ConditionDetail>
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

const Purple = styled.span`
  color: ${(props) => props.theme.PURPLE._00};
  ${(props) => props.theme.FONT.SemiBold.B4};
`;

export default Condition;
