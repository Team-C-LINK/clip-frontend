'use client';

import styled from 'styled-components';
import NextButton from './NextButton/NextButton';
import PrevButton from './PrevButton/PrevButton';

const PrevNextFrame = styled.div`
  position: fixed;
  bottom: 2dvh; // 고정값
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 91.1dvw;
  height: fit-content;
  gap: 2rem;
`;

const PrevNext = ({ next }: { next: string }) => {
  return (
    <>
      <PrevNextFrame>
        <PrevButton>이전으로</PrevButton>
        <NextButton targetAddress={next}>다음으로</NextButton>
      </PrevNextFrame>
    </>
  );
};

export default PrevNext;
