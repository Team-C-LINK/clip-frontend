import styled from 'styled-components';

export const LoginInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;

export const view_wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 91.1%;
  overflow-y: auto;
  flex: 1;
`;

export const LoginTextFrame = styled.div`
  position: relative;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.8rem;
  width: 26.1rem;
  height: 8rem;
  margin-top: 4rem;
`;

export const LoginTopText = styled.div`
  /* 로그인 */
  width: fit-content;
  height: fit-content;

  /* Header/H3 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.6rem;
  /* identical to box height, or 129% */
  display: flex;
  align-items: center;

  letter-spacing: 0.03em;

  /* Text/01 */
  color: #252525;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const LoginBottomText = styled.div`
  /* 소셜 로그인으로 간편하게 회원가입하세요 */

  width: fit-content;
  height: fit-content;

  /* Regular/B2 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  /* identical to box height, or 150% */
  display: flex;
  align-items: center;

  /* Text/01 */
  color: #252525;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const PointNoticeFrame = styled.div`
  /* Container */

  position: relative;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8rem 1.2rem;
  gap: 0.8rem;
  width: 23.3rem;
  max-width: 24.8rem;
  height: 2.2rem;

  /* Text/01 */
  background: #252525;
  border-radius: 0.4rem;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const PointNoticeText = styled.div`
  position: relative;
  left: 1rem;

  width: 18rem;
  height: 2.4rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  flex: none;
  order: 2;
  flex-grow: 1;
`;

export const ButtonFrame = styled.div`
  top: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 1.6rem;
`;

export const LoginButton = styled.img`
  position: relative;
  width: 95dvw;
  height: 4.8rem;
  background: url(${(props) => props.src});
`;

export const ReturnHomeButton = styled.div`
  /* btn */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.6rem;
  gap: 1.2rem;

  position: relative;
  width: 91.1dvw;
  height: 4.8rem;
  top: 6vh;

  /* Background/02 */
  background: #ffffff;
  /* Line/01 */
  border: 0.1rem solid #d9d9d9;
  border-radius: 0.4rem;

  /* 클립 홈으로 돌아가기 */

  /* Medium/B2 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  /* identical to box height, or 150% */

  /* Text/01 */
  color: #252525;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Banner = styled.div`
  /* banner M */

  position: relative;
  display: flex;
  flex-direciton: row;
  justify-content: center;
  width: 100%;
  height: 12rem;
  bottom: 0vh;
  background: #f9fafb;
`;

export const BannerTextFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;

export const BannerTopText = styled.div`
  /* 지금 클립 카카오 채널 추가하면, 베타테스트 이용 가능! */

  position: relative;
  width: fit-content;
  height: 5.2rem;

  top: 2rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 160%;
  /* or 26px */

  /* Text/01 */
  color: #252525;
`;

export const BannerBottomText = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  /* 채널 추가 바로가기 */
  top: 3rem;

  /* B4 M */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.6rem;
  /* identical to box height, or 133% */

  /* Text/01 */
  color: #252525;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BannerImage = styled.img`
  position: relative;
  width: 12.2rem;
  height: 10.2rem;
  top: 1.8rem;
  background: url(${(props) => props.src});
`;

export const KaKaoButton = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 3.6rem;
  gap: 1.2rem;

  position: relative;
  width: 91.1dvw;
  height: 4.4rem;

  background: #fee500;
  border-radius: 0.4rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.6rem;

  color: #252525;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const NaverButton = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 3.6rem;
  gap: 1.2rem;

  position: relative;
  width: 91.1dvw;
  height: 4.4rem;

  background: #00ac26;

  border-radius: 0.4rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.6rem;

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const triangle_tip = styled.img`
  position: absolute;
  bottom: -0.7rem;
  left: 50%;
  transform: translateX(-50%);
  background: url(${(props) => props.src});
`;
