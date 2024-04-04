'use client';

import Layout from '../SharedComponent/Background';
import NavigationBar from '../SharedComponent/NavigationBar/NaivgationBar';
import * as C from './component/C.style';
import clippy from '@/../public/clippy.png';
import list from './asset/image/list.svg';

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
                <C.profile_nickname>김클립</C.profile_nickname>
                <C.profile_email>abcdefg@gmail.com</C.profile_email>
              </C.profile_right_wrapper>
            </C.profile_wrapper>
            <C.divider></C.divider>
            <C.summary_wrapper>
              <C.summary_content_wrapper>
                <C.summary_case>300</C.summary_case>
                <C.summary_text>
                  <C.summary_point>P</C.summary_point>포인트
                </C.summary_text>
              </C.summary_content_wrapper>
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
                <img src={list.src}></img>
                <C.body_content_text>내 지원 목록</C.body_content_text>
              </C.body_content>
              <C.body_content>
                <img src={list.src}></img>
                <C.body_content_text>내 관심 목록</C.body_content_text>
              </C.body_content>
            </C.body_content_wrapper>
            <C.divider></C.divider>
            <C.body_content_wrapper>
              <C.body_content_title>내 활동</C.body_content_title>
              <C.body_content>
                <img src={list.src}></img>
                <C.body_content_text>내 지원 목록</C.body_content_text>
              </C.body_content>
              <C.body_content>
                <img src={list.src}></img>
                <C.body_content_text>내 관심 목록</C.body_content_text>
              </C.body_content>
            </C.body_content_wrapper>
            <C.divider></C.divider>
            <C.body_content_wrapper>
              <C.body_content_title>내 활동</C.body_content_title>
              <C.body_content>
                <img src={list.src}></img>
                <C.body_content_text>내 지원 목록</C.body_content_text>
              </C.body_content>
              <C.body_content>
                <img src={list.src}></img>
                <C.body_content_text>내 관심 목록</C.body_content_text>
              </C.body_content>
              <C.divider></C.divider>
            </C.body_content_wrapper>
          </C.body_wrapper>
        </C.wrapper>
        <NavigationBar state={'my'}></NavigationBar>
      </Layout>
    </>
  );
};

export default MyPage;
