import * as C from './NavigationBar.style';
import home from '../asset/image/home.svg';
import my from '../asset/image/my.svg';
import recruit from '../asset/image/recruit.svg';
import shop from '../asset/image/shop.svg';

// 이미지 파일들 object로 만들어 놓기
// state가 해당 네비게이션 컨텐츠면

const NavigationBar = ({ state }: { state: string }) => {
  return (
    <>
      <C.wrapper>
        <C.navigation_content_wrapper>
          <C.navigation_img
            $status={state == 'home'}
            src={home.src}
          ></C.navigation_img>
          <C.navigation_text $status={state == 'home'}>홈</C.navigation_text>
        </C.navigation_content_wrapper>
        <C.navigation_content_wrapper>
          <C.navigation_img
            $status={state == 'recruit'}
            src={recruit.src}
          ></C.navigation_img>
          <C.navigation_text $status={state == 'recruit'}>
            실시간 공고
          </C.navigation_text>
        </C.navigation_content_wrapper>
        <C.navigation_content_wrapper>
          <C.navigation_img
            $status={state == 'shop'}
            src={shop.src}
          ></C.navigation_img>
          <C.navigation_text $status={state == 'shop'}>
            포인트 샵
          </C.navigation_text>
        </C.navigation_content_wrapper>
        <C.navigation_content_wrapper>
          <C.navigation_img
            $status={state == 'my'}
            src={my.src}
          ></C.navigation_img>
          <C.navigation_text $status={state == 'my'}>My 클립</C.navigation_text>
        </C.navigation_content_wrapper>
      </C.wrapper>
    </>
  );
};

export default NavigationBar;
