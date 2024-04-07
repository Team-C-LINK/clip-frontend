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
        <C.BottomFrame>
          <C.BottomTopText>
            지금 클립 <C.text_highlight>카카오 채널</C.text_highlight> 추가하면,
            <br></br>
            <C.text_highlight>베타테스트</C.text_highlight>이용 가능!
          </C.BottomTopText>
          <C.BottomLowText>
            *지금은 베타 테스트 운영 기간으로, 카카오 채널을 통해, <br></br>내
            주변 참여 가능 연구 매칭 기능만 임시 제공 됩니다. <br></br>
            베타 테스트 신청 혜택은 아래 설명을 참고해 주세요.
          </C.BottomLowText>
        </C.BottomFrame>
      </C.Frame>
    </>
  );
};

export default First;
