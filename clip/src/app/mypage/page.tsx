'use client';

import Layout from '../SharedComponent/Background';
import NavigationBar from '../SharedComponent/NavigationBar/NaivgationBar';
import * as C from './component/C.style';
import clippy from '@/../public/clippy.png';
import Image from 'next/image';
import interest from './asset/image/interest.svg';
import alarm from './asset/image/alarm.svg';
import person from './asset/image/private.svg';
import faq from './asset/image/faq.svg';
import guide from './asset/image/guide.svg';
import logout from './asset/image/logout.svg';

const src =
  'https://www.google.co.kr/imgres?q=%ED%94%84%EB%A1%9C%ED%95%84%20%EC%9D%B4%EB%AF%B8%EC%A7%80&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1361%2F1361876.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Fkr%2Ffree-icon%2Fprofile_1361876&docid=ZBtzkAs5djdrhM&tbnid=VwqsUUG2AFy7sM&vet=12ahUKEwj0vLjG5KWFAxWcha8BHXnDA14QM3oECBcQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwj0vLjG5KWFAxWcha8BHXnDA14QM3oECBcQAA';

const MyPage = () => {
  return (
    <>
      <Layout>
        <C.wrapper>
          <C.header_wrapper>
            <C.profile_wrapper>
              <C.profile_img src={clippy.src}></C.profile_img>
              <C.profile_right_wrapper>
                <C.profile_nickname>
                  김클립님
                  <C.my_point>
                    내 포인트 &nbsp;<C.summary_point>P</C.summary_point>
                    300
                  </C.my_point>
                </C.profile_nickname>

                <C.profile_email>abcdefg@gmail.com</C.profile_email>
              </C.profile_right_wrapper>
            </C.profile_wrapper>
            <C.divider></C.divider>
            <C.summary_wrapper>
              <C.summary_content_wrapper>
                <C.summary_case>0</C.summary_case>
                <C.summary_text>신청 완료</C.summary_text>
              </C.summary_content_wrapper>
              <C.summary_content_wrapper>
                <C.summary_case>0</C.summary_case>
                <C.summary_text>신청 취소</C.summary_text>
              </C.summary_content_wrapper>
              <C.summary_content_wrapper>
                <C.summary_case>0</C.summary_case>
                <C.summary_text>매칭 완료</C.summary_text>
              </C.summary_content_wrapper>
            </C.summary_wrapper>
          </C.header_wrapper>
          <C.body_wrapper>
            <C.body_content_wrapper>
              <C.body_content_title>내 활동</C.body_content_title>
              <C.body_content>
                <Image
                  src={interest.src}
                  alt={'interest'}
                  width={20}
                  height={20}
                ></Image>
                <C.body_content_text>내 관심 목록</C.body_content_text>
              </C.body_content>
            </C.body_content_wrapper>
            <C.divider></C.divider>
            <C.body_content_wrapper>
              <C.body_content_title>설정</C.body_content_title>
              <C.body_content>
                <Image
                  src={person.src}
                  alt={'person'}
                  width={20}
                  height={20}
                ></Image>
                <C.body_content_text>개인정보 설정</C.body_content_text>
              </C.body_content>
              <C.body_content>
                <Image
                  src={alarm.src}
                  alt={'alarm'}
                  width={20}
                  height={20}
                ></Image>
                <C.body_content_text>알림 설정</C.body_content_text>
              </C.body_content>
            </C.body_content_wrapper>
            <C.divider></C.divider>
            <C.body_content_wrapper>
              <C.body_content_title>고객센터</C.body_content_title>
              <C.body_content>
                <Image src={faq.src} alt={'faq'} width={20} height={20}></Image>
                <C.body_content_text>자주 묻는 질문 (FAQ)</C.body_content_text>
              </C.body_content>
              <C.body_content>
                <Image
                  src={guide.src}
                  alt={'guide'}
                  width={20}
                  height={20}
                ></Image>
                <C.body_content_text>참여 가이드</C.body_content_text>
              </C.body_content>
              <C.divider></C.divider>
            </C.body_content_wrapper>
            <C.body_content_wrapper>
              <C.body_content>
                <Image
                  src={logout.src}
                  alt={'logout'}
                  width={20}
                  height={20}
                ></Image>
                <C.logout>로그아웃</C.logout>
              </C.body_content>
            </C.body_content_wrapper>
          </C.body_wrapper>
        </C.wrapper>
        <NavigationBar state={'my'}></NavigationBar>
      </Layout>
    </>
  );
};

export default MyPage;
