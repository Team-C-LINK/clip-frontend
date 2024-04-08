'use client';

import * as C from './C.style';
import clippy from '../../../../../public/clippy.png';
import clock from '../../../../../public/image/clock.svg';
import coinsHand from '../../../../../public/image/coins-hand.svg';
import Image from 'next/image';

const Second = () => {
  return (
    <>
      <C.Frame>
        <C.FirstTextBox src={clippy.src}>알고 계셨나요?</C.FirstTextBox>
        <C.SecondTextBox>
          연구 기관 설문조사에 참여하면<br></br>
          <C.text_purple>10만원</C.text_purple>이상의 사례비도 받을 수 있다는
          사실!
        </C.SecondTextBox>
        <C.ThirdFrame>
          <C.ThirdFrameInner>
            <Image src={clock.src} alt={'clock'} width={40} height={40}></Image>
            <C.ThirdFrameInnerSecondText>
              평균 소요시간
            </C.ThirdFrameInnerSecondText>
            <C.ThirdFrameInnerThirdText>
              <C.text_highlight>30분</C.text_highlight>
            </C.ThirdFrameInnerThirdText>
          </C.ThirdFrameInner>
          <C.ThirdFrameInner>
            <Image
              src={coinsHand.src}
              alt={'coinsHand'}
              width={40}
              height={40}
            ></Image>
            <C.ThirdFrameInnerSecondText>
              일당 사례비 평균
            </C.ThirdFrameInnerSecondText>
            <C.ThirdFrameInnerThirdText>
              <C.text_highlight>20,000원</C.text_highlight>
            </C.ThirdFrameInnerThirdText>
          </C.ThirdFrameInner>
        </C.ThirdFrame>
      </C.Frame>
    </>
  );
};

export default Second;
