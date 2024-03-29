import styled from 'styled-components';

type src = {
  src: string;
};

export const Frame = styled.div`
  /* 5 */

  position: relative;
  width: 100%
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 10rem;
`;

export const title = styled.div`
  /* 사전예약 이벤트 */
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 2.2272rem;
  line-height: 3.3rem;
  margin-bottom: 1rem;
  /* identical to box height, or 148% */
  text-align: center;

  /* Brand/White */
  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  z-index: 1;
  flex-grow: 0;
`;

export const text_explain_wrap = styled.div`
  /* 지금 카카오 채널을 추가하시면, 추첨을 통해 다양한 상품을 드립니다! */

  position: relative;

  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 150%;
  /* or 24px */
  text-align: center;

  color: #252525;
`;

export const title_wrap = styled.div`
  position: relative;
`;

export const title_ribbon = styled.div<src>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 309.72px;
  height: 70.12px;
  background: url(${(props) => props.src});
`;

export const text_notice_wrap = styled.div`
  position: relatve;
  display: flex;
  heigth: fit-content;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export const notice_left = styled.div`
  /* Frame 3 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0rem 0rem 0rem;
  gap: 4.6px;

  width: 75.63px;
  height: 19.35px;

  background: #5e0bb1;
  border-radius: 20.2311px;
  color: #ffffff;
  font-size: 1.2rem;
  font-family: Gmarket Sans;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const notice_right = styled.span`
  position: relative;
  top: 0.2rem;
  font-family: 'Gmarket Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
  /* identical to box height */
  text-align: center;

  color: #252525;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const present_wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const present_frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const present_text = styled.div`
  position: relative;
  width: fit-content;
  height: 3.2rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  /* or 16px */
  text-align: center;

  color: #000000;
`;

export const present_wrap = styled.div`
  /* Ellipse 7 */
  position: relative;
  width: 95.07px;
  height: 93.41px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  left: 0px;
  top: 0px;
  border-radius: 50%;
  background: #f2f2f2;
`;

export const present_img = styled.img`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export const present_person = styled.div`
  /* Frame 10 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2.24982px;
  gap: 2.25px;
  font-size: 1rem;
  position: absolute;
  font-family: Noto Sans KR;
  width: 22.35px;
  height: 22.35px;
  left: 75.73px;
  top: 64.38px;
  color: #ffffff;
  background: #3d3d3d;
  border-radius: 26.0979px;
`;
