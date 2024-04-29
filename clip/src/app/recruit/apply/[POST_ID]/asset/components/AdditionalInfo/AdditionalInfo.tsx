import styled from 'styled-components';
import TilteWithIndex from '../TitleWithIndex/TitleWithIndex';

const AdditionalInfo = () => {
  return (
    <>
      <Wrap>
        <TilteWithIndex index="4" text="추가 스크리닝 정보"></TilteWithIndex>
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

export default AdditionalInfo;
