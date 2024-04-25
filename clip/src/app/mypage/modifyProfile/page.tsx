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
import { uploadS3 } from './phone/assets/utils/s3upload';
import { useQuery } from '@tanstack/react-query';
import getUser from '@/app/api/get-user';
import { sidoList, siguList } from '@/app/join/address/hooks/sidoList';
import {
  JOB_LIST,
  EDUCATION_STATE,
  EDUCATION_LEVEL_LIST,
} from '@/app/SharedComponent/DropdownOption/DropdownOption';
import phoneNumberFormatter from '@/app/join/auth/utils/phoneNumberFormatter';
import patchModifyProfile from '@/app/api/patch-modifyProfile';

const ModifyProfile = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [previewURL, setPreviewURL] = useState<string | undefined>(
    defaultImage.src
  );

  const [checkbit, setCheckbit] = useState(false);

  const [dropdown, setDropdown] = useState<{ [key: string]: string }>({
    sido: '',
    sigu: '',
    education: '',
    educationState: '',
    job: '',
  });

  const { data: user } = useQuery({
    queryKey: ['getUser'],
    queryFn: getUser,
  });

  const setDropdownState = (e: any) => {
    const target = e.target.name;
    setDropdown((prev) => {
      return { ...prev, [target]: e.target.value };
    });
  };

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

  const s3Upload = () => {
    uploadS3(selectedFile);
  };

  const dropdownInit = () => {
    const [si, gu] = user.address.split(' ');
    const [edu1, edu2] = user.education.split(' ');
    setDropdown((prev) => ({
      ...prev,
      sido: si,
      sigu: gu,
      education: edu1,
      educationState: edu2,
      job: user?.job,
    }));
  };

  const submit = () => {
    const request = {
      profileUrl: '',
      address: `${dropdown.sido} ${dropdown.sigu}`,
      education: `${dropdown.education} ${dropdown.educationState}`,
      job: dropdown.job,
    };
    patchModifyProfile(request, parseInt(localStorage.getItem('id')!));
  };

  useEffect(() => {
    if (dropdown?.sido && checkbit)
      setDropdown((prev) => ({ ...prev, sigu: siguList[dropdown?.sido][0] }));
  }, [dropdown.sido]);

  useEffect(() => {
    if (user) dropdownInit();
  }, [user]);

  useEffect(() => {
    setTimeout(() => setCheckbit(true), 1000); //지역 세팅 useEffect 간격 설정 로직 변경 필요
  }, []);

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
            <C.profile_content_info>{user?.name}</C.profile_content_info>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>출생년도</C.profile_content_tag>
            <C.profile_content_info>{user?.birthYear}</C.profile_content_info>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>성별</C.profile_content_tag>
            <C.profile_content_info>{user?.gender}</C.profile_content_info>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>전화번호</C.profile_content_tag>
            <C.profile_content_info>
              {phoneNumberFormatter(user?.number)}
            </C.profile_content_info>
            <C.profile_modify_btn
              onClick={() =>
                (window.location.href = '/mypage/modifyProfile/phone')
              }
            >
              변경하기
            </C.profile_modify_btn>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>이메일</C.profile_content_tag>
            <C.profile_content_info>{user?.email}</C.profile_content_info>
            <C.profile_modify_btn
              onClick={() =>
                (window.location.href = '/mypage/modifyProfile/email')
              }
            >
              변경하기
            </C.profile_modify_btn>
          </C.profile_content_wrap>
        </C.profile_wrap>
        <C.profile_wrap $gap={'1.6rem'}>
          <C.profile_content_wrap>
            <C.profile_content_tag>거주지</C.profile_content_tag>
            <C.dropdown_wrap>
              <C.Dropdown
                name={'sido'}
                $src={arrow.src}
                $size={'50%'}
                onChange={setDropdownState}
                value={dropdown?.sido}
              >
                {sidoList?.map((val, idx) => {
                  return (
                    <option key={idx} value={val}>
                      {val}
                    </option>
                  );
                })}
              </C.Dropdown>
              <C.Dropdown
                name={'sigu'}
                $src={arrow.src}
                $size={'50%'}
                onChange={setDropdownState}
                value={dropdown?.sigu}
              >
                {siguList[dropdown?.sido]?.map((val, idx) => {
                  return (
                    <option key={idx} value={val}>
                      {val}
                    </option>
                  );
                })}
              </C.Dropdown>
            </C.dropdown_wrap>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>학력</C.profile_content_tag>
            <C.dropdown_wrap>
              <C.Dropdown
                name={'education'}
                $src={arrow.src}
                $size={'50%'}
                onChange={setDropdownState}
                value={dropdown?.education}
              >
                {EDUCATION_LEVEL_LIST?.map((val, idx) => {
                  return (
                    <option key={idx} value={val}>
                      {val}
                    </option>
                  );
                })}
              </C.Dropdown>
              <C.Dropdown
                name={'educationState'}
                $src={arrow.src}
                $size={'50%'}
                onChange={setDropdownState}
                value={dropdown?.educationState}
              >
                {EDUCATION_STATE?.map((val, idx) => {
                  return (
                    <option key={idx} value={val}>
                      {val}
                    </option>
                  );
                })}
              </C.Dropdown>
            </C.dropdown_wrap>
          </C.profile_content_wrap>
          <C.profile_content_wrap>
            <C.profile_content_tag>직업</C.profile_content_tag>
            <C.dropdown_wrap>
              <C.Dropdown
                name={'job'}
                $src={arrow.src}
                $size={'104%'}
                onChange={setDropdownState}
                value={dropdown?.job}
              >
                {JOB_LIST?.map((val, idx) => {
                  return (
                    <option key={idx} value={val}>
                      {val}
                    </option>
                  );
                })}
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
        <NextButton $size="91.1%" onClick={submit}>
          완료하기
        </NextButton>
      </Footer>
    </>
  );
};

export default ModifyProfile;
