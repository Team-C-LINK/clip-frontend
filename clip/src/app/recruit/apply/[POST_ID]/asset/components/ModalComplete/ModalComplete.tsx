import styled from 'styled-components';
import PrevNext from '@/app/join/component/PrevNext/PrevNext';
import PrevBtn from '@/app/join/component/PrevNext/PrevButton/PrevButton';
import NextButton from '@/app/join/component/PrevNext/NextButton/NextButton';
import check from '../../image/check.svg';
import Image from 'next/image';

const ModalComplete = () => {
  return (
    <>
      <Black_background></Black_background>
      <Wrap>
        <Image src={check.src} alt="check" width={40} height={40}></Image>
        <Content_wrap>
          <Content_title>지원을 완료했어요</Content_title>
          <Content_detail>
            선정 결과는 3일 이내에 <br></br> 연락처로 결과가 발송됩니다.
          </Content_detail>
        </Content_wrap>
        <PrevNext>
          <PrevBtn
            $size="43.5%"
            onClick={() => (window.location.href = '/recruit')}
          >
            돌아가기
          </PrevBtn>
          <NextButton $size="43.5%">신청내역 보기</NextButton>
        </PrevNext>
      </Wrap>
    </>
  );
};

const Black_background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

const Wrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1.6rem;
  width: 29.2rem;
  height: 19.4rem;
  border-radius: 0.8rem;

  background-color: #fff;

  z-index: 3;
`;

const Content_wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  gap: 1.2rem;
`;

const Content_title = styled.span`
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B1};
`;

const Content_detail = styled.span`
  text-align: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Medium.B2};
`;

export default ModalComplete;
