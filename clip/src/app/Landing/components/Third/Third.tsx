'use client';

import * as C from './C.style';
import clippy2 from '../../../../../public/image/clippy2.png';
import check from '../../../../../public/image/heroicons_check-badge.png';
import checkGray from '../../../../../public/image/heroicons_check-badge_gray.png';
const Third = () => {
  return (
    <>
      <C.ThirdFrame>
        <span>
          <C.FirstText isDotted={true}>쉽고</C.FirstText>
          <C.FirstText isDotted={false}>, </C.FirstText>
          <C.FirstText isDotted={true}>쏠쏠한 </C.FirstText>
          <C.FirstText isDotted={false}>연구 참여 부업!</C.FirstText>
        </span>
        <C.SecondText>
          하지만, 어디에서도 이런 정보를<br></br>알려주지 않았어요
        </C.SecondText>
        <C.ThirdImage src={clippy2.src}></C.ThirdImage>
        <C.FirstText isDotted={false}>더는 놓치지 마세요!</C.FirstText>
        <C.SecondText>이제 클립이 실시간으로 알려줄게요</C.SecondText>
        <C.FourthFrame>
          <C.FourthInner>
            <C.FourthInnerImage src={check.src}></C.FourthInnerImage>
            <C.FourthInnerText>참여 가능 연구 매칭 기능</C.FourthInnerText>
          </C.FourthInner>
          <C.FourthInnerCommingSoonInner>
            <C.FourthInnerCommingSoon>COMING SOON</C.FourthInnerCommingSoon>
            <C.FourthInnerCommingSoonImage
              src={checkGray.src}
            ></C.FourthInnerCommingSoonImage>
            <C.FourthInnerCommingSoonText>
              원클릭 지원 기능
            </C.FourthInnerCommingSoonText>
          </C.FourthInnerCommingSoonInner>
          <C.FourthInnerCommingSoonInner>
            <C.FourthInnerCommingSoon>COMING SOON</C.FourthInnerCommingSoon>
            <C.FourthInnerCommingSoonImage
              src={checkGray.src}
            ></C.FourthInnerCommingSoonImage>
            <C.FourthInnerCommingSoonText>
              내 여유시간에 딱 맞는 연구 추천 기능
            </C.FourthInnerCommingSoonText>
          </C.FourthInnerCommingSoonInner>
          <C.FourthInnerCommingSoonInner>
            <C.FourthInnerCommingSoon>COMING SOON</C.FourthInnerCommingSoon>
            <C.FourthInnerCommingSoonImage
              src={checkGray.src}
            ></C.FourthInnerCommingSoonImage>
            <C.FourthInnerCommingSoonText>
              기타 편의 기능
            </C.FourthInnerCommingSoonText>
          </C.FourthInnerCommingSoonInner>
        </C.FourthFrame>
        <C.FourthBetatestNoticeText>
          *지금은 베타 테스트 운영 기간으로, 카카오 채널을 통해,<br></br>내 주변
          참여 가능 연구 매칭 기능만 임시 제공 됩니다
        </C.FourthBetatestNoticeText>
      </C.ThirdFrame>
    </>
  );
};

export default Third;
