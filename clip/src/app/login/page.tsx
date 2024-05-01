'use client';

import * as C from './C.style';
import giftBox from '../../../public/image/giftBox.svg';
import kakao from '../../../public/image/KakaoLogin.svg';
import naver from '../../../public/image/NaverLogin.svg';
import GTS from '../../../public/image/GTS.svg';
import ClipPhoneImage from '../../../public/image/ClipPhoneImage.svg';
import triangle from './assets/image/tip.svg';
import Image from 'next/image';
import HeaderCancel from '../SharedComponent/Header/HeaderCancel/HeaderCancel';

const Login = () => {
  const kakaoLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_HOST}/oauth/kakao`;
  };

  return (
    <>
      <HeaderCancel route={'/login'} text=""></HeaderCancel>
      <C.view_wrap>
        <C.LoginInner>
          <C.LoginTextFrame>
            <C.LoginTopText>로그인</C.LoginTopText>
            <C.LoginBottomText>
              소셜 로그인으로 간편하게 회원가입하세요
            </C.LoginBottomText>
          </C.LoginTextFrame>
          <C.ButtonFrame>
            <C.PointNoticeFrame>
              <Image src={giftBox.src} alt="giftbox" width={21} height={21} />
              <C.PointNoticeText>회원 가입만 해도 300P 지급</C.PointNoticeText>
              <C.triangle_tip src={triangle.src}></C.triangle_tip>
            </C.PointNoticeFrame>
            <C.KaKaoButton onClick={kakaoLogin}>
              <Image src={kakao.src} alt="kakao" width={32} height={32} />
              카카오톡으로 계속하기
            </C.KaKaoButton>
            <C.NaverButton>
              <Image src={naver.src} alt="kakao" width={32} height={32} />
              네이버로 계속하기
            </C.NaverButton>
            <C.ReturnHomeButton onClick={() => (window.location.href = '/')}>
              클립 홈으로 돌아가기
            </C.ReturnHomeButton>
          </C.ButtonFrame>
        </C.LoginInner>
      </C.view_wrap>
      <C.Banner>
        <C.BannerTextFrame>
          <C.BannerTopText>
            지금 클립 <strong>카카오 채널</strong> 추가하면, <br></br>
            <strong>베타테스트</strong> 이용 가능!
          </C.BannerTopText>
          <C.BannerBottomText>
            채널 추가 바로가기
            <Image src={GTS.src} alt="kakao" width={16} height={16} />
          </C.BannerBottomText>
        </C.BannerTextFrame>
        <C.BannerImage src={ClipPhoneImage.src}></C.BannerImage>
      </C.Banner>
    </>
  );
};

export default Login;
