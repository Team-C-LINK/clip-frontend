import styled from 'styled-components';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';

const SelectTime = () => {
  return (
    <>
      <Wrap>
        <TilteWithIndex index="3" text="참여 시간 선택"></TilteWithIndex>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 91.1dvw;
`;

export default SelectTime;
