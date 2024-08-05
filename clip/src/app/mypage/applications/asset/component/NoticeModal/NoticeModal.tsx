import styled, { keyframes } from 'styled-components';
import time from '../../image/time.svg';
import mark from '../../image/mark.svg';
import Footer from '@/app/SharedComponent/Footer/Footer';
import NextButton from '@/app/join/component/PrevNext/NextButton/NextButton';
import PrevBtn from '@/app/join/component/PrevNext/PrevButton/PrevButton';
import PrevNext from '@/app/join/component/PrevNext/PrevNext';
import Image from 'next/image';

const NoticeModal = ({
  setModalState,
  reservationTime,
  location,
}: {
  setModalState: Function;
  reservationTime: string | undefined;
  location: string | undefined;
}) => {
  const handleModalState = () => {
    setModalState(false);
  };

  return (
    <>
      <Black_background onClick={handleModalState}></Black_background>
      <Modal_wrap>
        <Inner>
          <StyledListItem>
            <Image src={time.src} alt="time" width={18} height={18}></Image>{' '}
            {reservationTime}
          </StyledListItem>
          <StyledListItem>
            <Image src={mark.src} alt="mark" width={18} height={18}></Image>
            {location}
          </StyledListItem>
        </Inner>
      </Modal_wrap>
      <Footer>
        <PrevNext>
          <PrevBtn $size={'45dvw'}>문의하기</PrevBtn>
          <NextButton $size={'45dvw'}>지원 취소</NextButton>
        </PrevNext>
      </Footer>
    </>
  );
};

type ImageUlType = {
  src: string;
};

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const Black_background = styled.div`
  position: fixed;
  top: 0rem;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const Modal_wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 13.2rem;
  bottom: 8rem;
  background: #fff;
  border-radius: 0.8rem 0.8rem 0rem 0rem;
  z-index: 2;
  animation: ${fadeInUp} 0.5s;
  gap: 3rem;
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 91.1%;
  height: fit-content;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B2};
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.TEXT._01};
  overflow: auto;
`;

const StyledListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 90%;
`;

export default NoticeModal;
