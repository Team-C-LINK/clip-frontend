import styled from 'styled-components';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';
import Calendar from '../Calendar/Calendar';
import RequestApplyType from '@/app/type/requestApplyType';

const SelectTime = ({
  setApplyInfo,
}: {
  setApplyInfo: React.Dispatch<React.SetStateAction<RequestApplyType>>;
}) => {
  return (
    <>
      <Wrap>
        <TilteWithIndex index="3" text="참여 시간 선택"></TilteWithIndex>
        <Calendar setApplyInfo={setApplyInfo}></Calendar>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

export default SelectTime;
