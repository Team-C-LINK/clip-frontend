import GrayButton from '@/app/SharedComponent/Category/GrayButton';
import GreenButton from '@/app/SharedComponent/Category/GreenButton';
import PurpleButton from '@/app/SharedComponent/Category/PurPleButton';
import styled from 'styled-components';

const StatusBar = ({
  recruitStatus,
  category,
}: {
  recruitStatus: boolean | undefined;
  category: string | undefined;
}) => {
  return (
    <>
      <Wrap>
        {recruitStatus ? (
          <GreenButton>모집중</GreenButton>
        ) : (
          <GrayButton>마감</GrayButton>
        )}
        <PurpleButton>{category}</PurpleButton>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relaive;
  display: flex;
  flex-direction: row;
  gap: 1.3rem;
  width: 91.1%;
  height: fit-content;
`;

export default StatusBar;
