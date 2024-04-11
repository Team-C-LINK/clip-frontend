'use client';

import styled from 'styled-components';
import NextButton from './NextButton/NextButton';
import PrevButton from './PrevButton/PrevButton';

const PrevNextFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 91.1dvw;
  height: fit-content;
  gap: 2rem;
`;

const PrevNext = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrevNextFrame>{children}</PrevNextFrame>
    </>
  );
};

export default PrevNext;
