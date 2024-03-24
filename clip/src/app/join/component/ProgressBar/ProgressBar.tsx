'use client';

import * as C from './C.style';

const ProgressBar = ({ page }: { page: number }) => {
  const colorArray = new Array(5).fill(0);

  return (
    <>
      <C.ProgressBar>
        {colorArray.map((color: string, idx: number) => {
          return (
            <C.ProgressBarInner
              color={idx < page ? '#790DE4' : '#D9D9D9'}
              key={idx}
            ></C.ProgressBarInner>
          );
        })}
      </C.ProgressBar>
    </>
  );
};

export default ProgressBar;
