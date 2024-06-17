import Divider from '@/app/SharedComponent/Divider/Divider';
import * as C from './RegisterModal.style';
import Image from 'next/image';
import plus from '../../image/plus.svg';
import Spacer from '@/app/SharedComponent/Spacer/Spacer';
import cancel from '../../image/cancel.svg';

const RegisterModal = () => {
  return (
    <>
      <C.black_background>
        <Image src={plus.src} alt="plus" width={10} height={10}></Image>
      </C.black_background>
      <C.wrap>
        <C.title>새 연구자 등록</C.title>
        <C.cancel_button>
          <Image src={cancel.src} alt="plus" width={12} height={12}></Image>
        </C.cancel_button>
        <Divider $size="100%"></Divider>
        <Spacer height="3rem"></Spacer>
        <C.input_wrap>
          <C.index>연구자 명</C.index> <C.input></C.input>
        </C.input_wrap>
        <C.input_wrap>
          <C.index>연구자 소속</C.index> <C.input></C.input>
        </C.input_wrap>
        <C.input_wrap>
          <C.index>이메일</C.index> <C.input></C.input>
        </C.input_wrap>
        <C.input_wrap>
          <C.index>연구 분야</C.index> <C.input></C.input>
        </C.input_wrap>
        <C.input_wrap>
          <C.index>대표 주소</C.index> <C.input></C.input>
        </C.input_wrap>
        <Spacer height="3rem"></Spacer>
        <C.input_wrap>
          <C.upload>
            <Image src={plus.src} alt="plus" width={10} height={10}></Image>
            사진 업로드
          </C.upload>
          <C.selected_file>선택된 파일 없음</C.selected_file>
        </C.input_wrap>
        <Spacer height="3rem"></Spacer>
        <C.sumbit>완료하기</C.sumbit>
      </C.wrap>
    </>
  );
};

export default RegisterModal;
