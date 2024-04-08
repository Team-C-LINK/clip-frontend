'use client';

import Layout from '@/app/SharedComponent/Background';
import Header from '@/app/SharedComponent/Header/Header';
import * as C from './component/C.style';
import checkedbox from './asset/checkedBox.svg';
import uncheckedbox from './asset/uncheckedBox.svg';
import Image from 'next/image';

const Applications = () => {
  return (
    <>
      <Layout>
        <Header text={'내 지원목록'}></Header>
        <C.filter_wrap>
          <C.filter_inner>
            <C.filter_status_wrap>
              <C.filter_text>신청 완료</C.filter_text>
              <C.filter_text>신청 취소</C.filter_text>
              <C.filter_text>매칭 완료</C.filter_text>
            </C.filter_status_wrap>
            <C.filter_recruiting_wrap>
              <Image
                src={uncheckedbox.src}
                alt="uncheckedbox"
                width={24}
                height={24}
              ></Image>
              <C.filter_recruiting_text>모집중</C.filter_recruiting_text>
            </C.filter_recruiting_wrap>
          </C.filter_inner>
        </C.filter_wrap>
      </Layout>
    </>
  );
};

export default Applications;
