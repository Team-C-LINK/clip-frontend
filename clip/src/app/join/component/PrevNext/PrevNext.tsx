'use client';

import styled from 'styled-components';

const PrevNextFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 91.1%;
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
