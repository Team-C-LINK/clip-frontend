'use client';

import LandingSixth from '../../../../../public/image/LandingSixth.svg';
import JoinEvent from '../../../../../public/image/JoinEvent.svg';
import styled from 'styled-components';
import ribbon from './assets/image/ribbon.svg';
import airpod from './assets/image/airpod.png';
import baemin from './assets/image/baemin.png';
import starbucks from './assets/image/starbucks.png';
import * as C from './C.style';
const Sixth = () => {
  const moveToChannel = () => {
    window.location.href = 'https://pf.kakao.com/_uRgmG';
  };

  return (
    <>
      <C.Frame>
        <C.title_wrap>
          <C.title_ribbon src={ribbon.src}>
            <C.title>사전예약 이벤트</C.title>
          </C.title_ribbon>
        </C.title_wrap>
        <C.text_explain_wrap>
          지금 카카오 채널을 추가하시면, <br></br>추첨을 통해 다양한 상품을
          드립니다!
        </C.text_explain_wrap>
        <C.text_notice_wrap>
          <C.notice_left>당첨자 발표</C.notice_left>
          <C.notice_right>카카오 채널로 추후 공지</C.notice_right>
        </C.text_notice_wrap>
        <C.present_wrapper>
          <C.present_frame>
            <C.present_wrap>
              <C.present_img
                src={airpod.src}
                height={'5.404rem'}
                width={'6.805rem'}
              ></C.present_img>
              <C.present_person>1명</C.present_person>
            </C.present_wrap>
            <C.present_text>
              에어팟 프로 <br></br>2세대
            </C.present_text>
          </C.present_frame>
          <C.present_frame>
            <C.present_wrap>
              <C.present_img
                src={baemin.src}
                width={'6.538rem'}
                height={'4.346rem'}
              ></C.present_img>
              <C.present_person>5명</C.present_person>
            </C.present_wrap>
            <C.present_text>
              배달의 민족 <br></br>2만원
            </C.present_text>
          </C.present_frame>
          <C.present_frame>
            <C.present_wrap>
              <C.present_img
                src={starbucks.src}
                width={'5.604rem'}
                height={'7.539rem'}
              ></C.present_img>
              <C.present_person>10명</C.present_person>
            </C.present_wrap>
            <C.present_text>
              스타벅스<br></br>아메리카노
            </C.present_text>
          </C.present_frame>
        </C.present_wrapper>
      </C.Frame>
    </>
  );
};

export default Sixth;
