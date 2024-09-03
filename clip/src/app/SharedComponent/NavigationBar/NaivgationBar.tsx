import * as C from './NavigationBar.style';
import home from '../asset/image/home.svg';
import my from '../asset/image/my.svg';
import recruit from '../asset/image/recruit.svg';
import shop from '../asset/image/shop.svg';
import { useState, useEffect } from 'react';
import useScroll from '@/app/utils/hook/useScroll';
import Image from 'next/image';

const NavigationBar = ({ state }: { state: string }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  useScroll(setIsNavVisible);

  return (
    <>
      <C.wrapper $isVisible={isNavVisible}>
        <C.navigation_content_wrapper
          onClick={() => (window.location.href = '/')}
        >
          <Image
            src={home.src}
            alt="annoucement"
            width={0}
            height={0}
            style={{ width: 'fit-content', height: 'fit-content' }}
          ></Image>
          <C.navigation_text $status={state == 'home'}>홈</C.navigation_text>
        </C.navigation_content_wrapper>
        <C.navigation_content_wrapper
          onClick={() => (window.location.href = '/announcement')}
        >
          <Image
            src={recruit.src}
            alt="annoucement"
            width={0}
            height={0}
            style={{ width: 'fit-content', height: 'fit-content' }}
          ></Image>
          <C.navigation_text $status={state == 'recruit'}>
            실시간 공고
          </C.navigation_text>
        </C.navigation_content_wrapper>
        {/* <C.navigation_content_wrapper>
          <C.navigation_img
            $status={state == 'shop'}
            src={shop.src}
          ></C.navigation_img>
          <C.navigation_text $status={state == 'shop'}>
            포인트 샵
          </C.navigation_text>
        </C.navigation_content_wrapper>
        <C.navigation_content_wrapper
          onClick={() => (window.location.href = '/mypage')}
        >
          <C.navigation_img
            $status={state == 'my'}
            src={my.src}
          ></C.navigation_img>
          <C.navigation_text $status={state == 'my'}>My 클립</C.navigation_text>
        </C.navigation_content_wrapper> */}
      </C.wrapper>
    </>
  );
};

export default NavigationBar;
