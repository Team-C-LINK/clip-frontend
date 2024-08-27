'use client';

import * as C from './C.style';
import phone from '../../../../../public/image/phone.svg';

const First = () => {
  return (
    <>
      <C.Frame>
        <C.TopText>
          연구 참여, <br></br>참 쉬운 부업이 되다
        </C.TopText>
        <C.MiddleImage src={phone.src}></C.MiddleImage>
      </C.Frame>
    </>
  );
};

export default First;
