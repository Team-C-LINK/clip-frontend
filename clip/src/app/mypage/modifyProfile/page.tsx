'use client';

import Header from '@/app/SharedComponent/Header/Header';
import HeaderBack from '@/app/SharedComponent/Header/HeaderBack/HeaderBack';
import * as C from './component/C.style';
import arrow from './assets/image/arrow.svg';
import defaultImage from '@/app/Landing/components/Fourth/assets/image/cap_clippy.svg';
import camera from './assets/image/camera.svg';
import NextButton from '@/app/join/component/PrevNext/NextButton/NextButton';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Footer from '@/app/SharedComponent/Footer/Footer';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';

const ModifyProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState<string | undefined>(
    defaultImage.src
  );

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result?.toString());
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log(selectedFile);
  }, [previewURL]);

  return (
    <>
      <Spacer height="5.6rem" />
      <Header>
        <HeaderBack text="개인정보 설정" route={'/mypage'}></HeaderBack>{' '}
      </Header>
      <C.view_wrap>
        <C.profile_wrap $gap={'0rem'}>
          <C.profile_image_modify_wrap>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="profileImage"
              onChange={handleFileInputChange}
              hidden={true}
            />
            <C.profile_image src={previewURL}></C.profile_image>
            <C.profile_image_modify htmlFor="profileImage">
              <Image
                src={camera.src}
                alt="camera"
                width={21.33}
                height={21.33}
              ></Image>
            </C.profile_image_modify>
          </C.profile_image_modify_wrap>
        </C.profile_wrap>
        <C.profile_wrap $gap={'0rem'}>
          <C.profile_content_wrap>
            <C.profile_content_tag>이름</C.profile_content_tag>
            <C.profile_content_info>김클립</C.profile_content_info>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>출생년도</C.profile_content_tag>
            <C.profile_content_info>1998</C.profile_content_info>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>성별</C.profile_content_tag>
            <C.profile_content_info>남성</C.profile_content_info>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>전화번호</C.profile_content_tag>
            <C.profile_content_info>010-1234-1234</C.profile_content_info>
            <C.profile_modify_btn>변경하기</C.profile_modify_btn>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>이메일</C.profile_content_tag>
            <C.profile_content_info>abd@gmail.com</C.profile_content_info>
            <C.profile_modify_btn>변경하기</C.profile_modify_btn>
          </C.profile_content_wrap>
        </C.profile_wrap>
        <C.profile_wrap $gap={'1.6rem'}>
          <C.profile_content_wrap>
            <C.profile_content_tag>거주지</C.profile_content_tag>
            <C.dropdown_wrap>
              <C.Dropdown $src={arrow.src} $size={'33dvw'}>
                <option>서울특별시</option>
              </C.Dropdown>
              <C.Dropdown $src={arrow.src} $size={'33dvw'}>
                <option>강남구</option>
              </C.Dropdown>
            </C.dropdown_wrap>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>학력</C.profile_content_tag>
            <C.dropdown_wrap>
              <C.Dropdown $src={arrow.src} $size={'33dvw'}>
                <option>대학교</option>
              </C.Dropdown>
              <C.Dropdown $src={arrow.src} $size={'33dvw'}>
                <option>졸업</option>
              </C.Dropdown>
            </C.dropdown_wrap>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>직업</C.profile_content_tag>
            <C.dropdown_wrap>
              <C.Dropdown $src={arrow.src} $size={'70dvw'}>
                <option>회사원</option>
              </C.Dropdown>
            </C.dropdown_wrap>
          </C.profile_content_wrap>
        </C.profile_wrap>
        <C.profile_wrap $gap={'0rem'}>
          <C.profile_content_tag>탈퇴하기</C.profile_content_tag>
        </C.profile_wrap>
      </C.view_wrap>
      <Spacer height="8rem" />
      <Footer>
        <NextButton $size="91.1dvw">완료하기</NextButton>
      </Footer>
    </>
  );
};

export default ModifyProfile;
