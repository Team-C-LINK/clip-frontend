'use client';
import Layout from '../SharedComponent/Background';
import * as C from './C.style';
import giftBox from '../../../public/image/giftBox.svg';
import kakao from '../../../public/image/KakaoLogin.svg';
import naver from '../../../public/image/NaverLogin.svg';
import GTS from '../../../public/image/GTS.svg';
import ClipPhoneImage from '../../../public/image/ClipPhoneImage.svg';
const Login = () => {
  return (
    <>
      <C.LoginInner>
        <C.LoginTextFrame>
          <C.LoginTopText>로그인</C.LoginTopText>
          <C.LoginBottomText>
            소셜 로그인으로 간편하게 회원가입하세요
          </C.LoginBottomText>
        </C.LoginTextFrame>
        <C.ButtonFrame>
          <C.PointNoticeFrame>
            <img src={giftBox.src}></img>
            <C.PointNoticeText>회원 가입만 해도 300P 지급</C.PointNoticeText>
          </C.PointNoticeFrame>
          <C.KaKaoButton>
            <img src={kakao.src}></img>카카오톡으로 계속하기
          </C.KaKaoButton>
          <C.NaverButton>
            <img src={naver.src}></img>카카오톡으로 계속하기
          </C.NaverButton>
          <C.ReturnHomeButton>클립 홈으로 돌아가기</C.ReturnHomeButton>
        </C.ButtonFrame>
      </C.LoginInner>
      <C.Banner>
        <C.BannerTextFrame>
          <C.BannerTopText>
            지금 클립 <strong>카카오 채널</strong> 추가하면, <br></br>
            <strong>베타테스트</strong> 이용 가능!
          </C.BannerTopText>
          <C.BannerBottomText>
            채널 추가 바로가기 <img src={GTS.src}></img>
          </C.BannerBottomText>
        </C.BannerTextFrame>
        <C.BannerImage src={ClipPhoneImage.src}></C.BannerImage>
      </C.Banner>
    </>
  );
};

export default Login;
