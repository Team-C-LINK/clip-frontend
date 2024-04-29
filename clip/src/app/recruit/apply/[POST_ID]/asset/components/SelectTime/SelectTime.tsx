import styled from 'styled-components';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';
import Calendar from '../Calendar/Calendar';

const SelectTime = () => {
  return (
    <>
      <Wrap>
        <TilteWithIndex index="3" text="참여 시간 선택"></TilteWithIndex>
        <Calendar></Calendar>
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
