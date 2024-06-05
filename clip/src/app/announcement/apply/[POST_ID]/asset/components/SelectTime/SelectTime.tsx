import styled from 'styled-components';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';
import Calendar from '../Calendar/Calendar';
import RequestApplyType from '@/app/type/RequestApplyType';

const SelectTime = ({
  setApplyInfo,
}: {
  setApplyInfo: React.Dispatch<React.SetStateAction<RequestApplyType>>;
}) => {
  return (
    <>
      <Wrap>
        <Title_wrap>
          <TilteWithIndex index="3" text="참여 시간 선택"></TilteWithIndex>
        </Title_wrap>
        <Calendar setApplyInfo={setApplyInfo}></Calendar>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
`;

const Title_wrap = styled.div`
  width: 100%;
`;

export default SelectTime;
